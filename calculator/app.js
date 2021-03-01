document.addEventListener('DOMContentLoaded', () => {
  // Container DOM element for all the buttons on the calculator
  const buttons = document.getElementById('buttons')

  // Function for creating a button
  function createBtn(value, innerText, id, classes, parent) {
    // Create the DOM element
    let button = document.createElement('button')

    // Set the button value if not null
    if (value !== null) button.value = `${value}`

    // Set the button text if not null
    if (innerText !== null) button.innerText = `${innerText}`

    // Set button id if not null
    if (id !== null) button.setAttribute('id', id)

    // Add classes to button if not null
    if (classes !== null) button.setAttribute('class', classes)

    // Append the button to a parent DOM element
    parent.appendChild(button)
  }

  // Create buttons for the numbers
  const integers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  for (let num = 0; num < integers.length; num++) {
    createBtn(
      integers[num],
      integers[num],
      `btn${integers[num]}`,
      'num-btn',
      buttons
    )
  }

  // Create functional buttons
  const calculations = [
    { symbol: '+', id: 'btnAdd' },
    { symbol: '-', id: 'btnSubtract' },
    { symbol: '×', id: 'btnMultiply' },
    { symbol: '÷', id: 'btnDivide' },
  ]

  for (let calc = 0; calc < calculations.length; calc++) {
    createBtn(
      null,
      calculations[calc].symbol,
      calculations[calc].id,
      'calc-btn',
      buttons
    )
  }
})
