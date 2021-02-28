document.addEventListener('DOMContentLoaded', event => {
  // Stopwatch time display DOM element
  const timeDisplay = document.getElementById('timeDisplay')

  const displayTime = () => {
    // Temporary storage for styling counted time
    let h, m, s, ms

    // Styling of counted time
    if (deciseconds < 10) ms = `0${deciseconds}`
    else ms = deciseconds

    if (seconds < 10) s = `0${seconds}`
    else s = seconds

    if (minutes < 10) m = `0${minutes}`
    else m = minutes

    if (hours < 10) h = `0${hours}`
    else h = hours

    // Counted time concatenated and displayed in DOM
    return `${h}:${m}:${s}:${ms}`
  }

  // Time tracking variables
  let hours = 0,
    minutes = 0,
    seconds = 0,
    deciseconds = 0,
    interval,
    trackingTime = false

  // Stopwatch button DOM elements
  const startStopBtn = document.getElementById('startStopBtn')
  const resetLapsBtn = document.getElementById('resetLapsBtn')

  startStopBtn.innerText = 'Start'
  resetLapsBtn.innerText = 'Reset'

  // Laps container
  let lapsDisplay = document.getElementById('lapsDisplay')
  let lapNo = 1

  const addLap = () => {
    let lapNoContainer = document.createElement('div')
    lapNoContainer.classList.add('lap-no')
    lapNoContainer.innerText = `Lap ${lapNo}`
    lapNo++

    let lapTimeContainer = document.createElement('div')
    lapTimeContainer.classList.add('lap-time')
    lapTimeContainer.innerText = displayTime()

    let lap = document.createElement('div')
    lap.appendChild(lapNoContainer)
    lap.appendChild(lapTimeContainer)

    lapsDisplay.appendChild(lap)
  }

  // Things that happen if the start button is clicked
  startStopBtn.onclick = () => {
    if (trackingTime) {
      // Timer stops because interval is cleared
      clearInterval(interval)

      startStopBtn.innerText = 'Start'
      resetLapsBtn.innerText = 'Reset'

      trackingTime = false
    } else if (!trackingTime) {
      // Timer stops because interval is cleared
      clearInterval(interval)

      // Interval is started
      interval = setInterval(trackTime, 10)

      startStopBtn.innerText = 'Stop'
      resetLapsBtn.innerText = 'Laps'

      trackingTime = true
    }
  }

  // Things that happen if the reset button is clicked
  resetLapsBtn.onclick = () => {
    if (trackingTime) {
      addLap()
    } else if (!trackingTime) {
      // Time tracking variables set back to their default values
      hours = 0
      minutes = 0
      seconds = 0
      deciseconds = 0

      // DOM element updated to display reset time
      timeDisplay.innerText = displayTime()

      // Remove recorded laps
      lapsDisplay.innerHTML = ''
    }
  }

  // Logic to for tracking the time if the stopwatch is on
  const trackTime = () => {
    // Start counting the smallest time unit
    deciseconds++

    // Counting the seconds and resetting the deciseconds
    if (deciseconds > 99) {
      seconds++
      deciseconds = 0
    }

    // Counting the minutes and resetting the seconds
    if (seconds > 59) {
      minutes++
      seconds = 0
    }

    // Counting the hours and resetting the minutes
    if (minutes > 59) {
      hours++
      minutes = 0
    }

    timeDisplay.innerText = displayTime()
  }
})
