document.addEventListener('DOMContentLoaded', () => {
  // const clock = document.getElementById('clock') // To update the DOM element
  const hoursDOM = document.getElementById('hours') // Hours to update in DOM
  const minutesDOM = document.getElementById('minutes') // Minutes to update in DOM

  let time // Stores the current time

  // Logic to update the current time every second
  const trackTime = () => {
    // Getting the current time
    time = new Date().toLocaleTimeString()

    // Updating the clock in index.js with the current time
    hoursDOM.innerText = time.substring(0, 2)
    minutesDOM.innerText = time.substring(3, 5)
  }

  setInterval(trackTime, 1000)
})
