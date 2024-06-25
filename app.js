/*-------------------------------- Constants --------------------------------*/
const userNums = []
const display = document.querySelector('.display')

/*-------------------------------- Variables --------------------------------*/

let textCont
let operation = '' // the user stories only want one operation. If it asked for multiple, this would be an array.
let output = 0
let int1 = 0
let int2 = 0

/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/
// a function to clear the calculator
const clear = () => {
  userNums.length = 0
  operation = ''
  output = 0
  int1 = 0
  int2 = 0
  display.innerText = null
  }


  const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      // logic to capture the button's value would go here...
      // const choice = parseInt(event.target.innerText)
      // console.log(choice)
    //   if (typeof choice === 'number') {
    //   const number = textCont + event.target.textContent
    //   userNums.push(parseInt(number))
    //   textCont = undefined
    // } else {
    //   operator.push(event.target.textContent)
    // }
})
    });
const calculator = document.querySelector('#calculator');
calculator.addEventListener('click', (event) => {
  if (event.target.classList.contains('number')) {
    userNums.push(event.target.innerText)
    console.log(userNums)
  } else if (event.target.classList.contains('operator')) {
    operation = event.target.innerText
    int1=userNums.join('')
    userNums.length = 0 // this resets the array length for it to take in a new multi-digit integer
  } else if (event.target.classList.contains('equals')) {
    int2=userNums.join('')
    userNums.length = 0
    output = eval(`${int1} ${operation} ${int2}`) // this only takes strings
    display.innerText = output
    console.log(output)

  } else if (event.target.innerText === 'C') {
    clear()
    console.log(int1," and int2 is ", int2)
  }
});
/*----------------------------- Event Listeners -----------------------------*/
