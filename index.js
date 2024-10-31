
let newGameBtn = document.getElementById("new-game-btn")

let homeScoreEl = document.getElementById("home-score")
let plusOneHomeBtn = document.getElementById("home-plus-one")
let plusTwoHomeBtn = document.getElementById("home-plus-two")
let plusThreeHomeBtn = document.getElementById("home-plus-three")
let homeScore = 0

let guestScoreEl = document.getElementById("guest-score")
let plusOneGuestBtn = document.getElementById("guest-plus-one")
let plusTwoGuestBtn = document.getElementById("guest-plus-two")
let plusThreeGuestBtn = document.getElementById("guest-plus-three")
let guestScore = 0

let foulsHomeEl = document.getElementById("home-fouls")
let plusOneFoulHomeBtn = document.getElementById("home-fouls-plus-one")
let minusOneFoulHomeBtn = document.getElementById("home-fouls-minus-one")
let foulsHome = 0

let foulsGuestEl = document.getElementById("guest-fouls")
let plusOneFoulGuestBtn = document.getElementById("guest-fouls-plus-one")
let minusOneFoulGuestBtn = document.getElementById("guest-fouls-minus-one")
let foulsGuest = 0

let periodEl = document.getElementById("period")
let periodPlusOneBtn = document.getElementById("period-plus-one")
let periodMinusOneBtn = document.getElementById("period-minus-one")
let period = 1

let timerEl = document.getElementById("timer")
let pauseTimerBtn = document.getElementById("pause-timer")

let totalSeconds = 2880 // 48 minutes in seconds
let timerInterval

// Function to start the countdown
function startCountdown() {
    timerInterval = setInterval(() => {
      totalSeconds--
      updateTimerDisplay()
      if (totalSeconds === 0) {
        clearInterval(timerInterval)
        
      }
    }, 1000)
  }

// Function to update the timer display
function updateTimerDisplay() {
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    timerEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

// Event listener for the "PAUSE" button
let isPaused = false
pauseTimerBtn.addEventListener('click', () => {
  if (!isPaused) {
    clearInterval(timerInterval)
    isPaused = true
    pauseTimerBtn.textContent = "CONTINUE"
  } else {
    startCountdown()
    isPaused = false
    pauseTimerBtn.textContent = "PAUSE"
  }
})


newGameBtn.addEventListener("click", newGame)

function newGame () {
    clearInterval(timerInterval)
    totalSeconds = 2880
    timerEl.textContent = "48:00"
    startCountdown()
    homeScore = 0
    homeScoreEl.textContent = homeScore
    guestScore = 0
    guestScoreEl.textContent = guestScore
    foulsHome = 0
    foulsHomeEl.textContent = foulsHome
    foulsGuest = 0
    foulsGuestEl.textContent = foulsGuest
    period = 1
    periodEl.textContent = period
}


plusOneHomeBtn.addEventListener("click", addOneHome)

function addOneHome() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}


plusTwoHomeBtn.addEventListener("click", addTwoHome)

function addTwoHome() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

plusThreeHomeBtn.addEventListener("click", addThreeHome)

function addThreeHome() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}



plusOneGuestBtn.addEventListener("click", addOneGuest)

function addOneGuest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}


plusTwoGuestBtn.addEventListener("click", addTwoGuest)

function addTwoGuest() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

plusThreeGuestBtn.addEventListener("click", addThreeGuest)

function addThreeGuest() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

plusOneFoulHomeBtn.addEventListener("click", addFoulHome)

function addFoulHome(){
    foulsHome +=1
    foulsHomeEl.textContent = foulsHome
}

minusOneFoulHomeBtn.addEventListener("click", minusFoulHome)

function minusFoulHome(){
    if (foulsHome > 0) {
        foulsHome -=1
        foulsHomeEl.textContent = foulsHome
    }
}

plusOneFoulGuestBtn.addEventListener("click", addFoulGuest)

function addFoulGuest(){
    foulsGuest +=1
    foulsGuestEl.textContent = foulsGuest
}

minusOneFoulGuestBtn.addEventListener("click", minusFoulGuest)

function minusFoulGuest(){
    if (foulsGuest > 0) {
        foulsGuest -=1
        foulsGuestEl.textContent = foulsGuest
    }
}


periodPlusOneBtn.addEventListener("click", addPeriod)

function addPeriod(){
    if(period <=3 ) {
        period +=1
        periodEl.textContent = period
    }
    
}

periodMinusOneBtn.addEventListener("click", minusPeriod)

function minusPeriod(){
    if(period > 1 ) {
        period -=1
        periodEl.textContent = period
    }
    
}