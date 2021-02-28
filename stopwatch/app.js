document.addEventListener('DOMContentLoaded', event => {
  // Stopwatch time display DOM element
  const timeDisplay = document.getElementById('timeDisplay')

  // How to display time in DOM
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
    timeDisplay.innerText = `${h}:${m}:${s}:${ms}`
  }

  // Stopwatch button DOM elements
  const startBtn = document.getElementById('startBtn')
  const stopBtn = document.getElementById('stopBtn')
  const resetBtn = document.getElementById('resetBtn')

  // Time tracking variables
  let hours = 0,
    minutes = 0,
    seconds = 0,
    deciseconds = 0,
    interval

  // Things that happen if the start button is clicked
  startBtn.onclick = () => {
    // Timer stops because interval is cleared
    clearInterval(interval)

    // Interval is started
    interval = setInterval(trackTime, 10)
  }

  // Things that happen if the stop button is clicked
  stopBtn.onclick = () => {
    // Timer stops because interval is cleared
    clearInterval(interval)
  }

  // Things that happen if the reset button is clicked
  resetBtn.onclick = () => {
    // Time tracking variables set back to their default values
    hours = 0
    minutes = 0
    seconds = 0
    deciseconds = 0

    // DOM element updated to display reset time
    displayTime()
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

    displayTime()
  }
})
