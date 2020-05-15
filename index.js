/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greeting(){
  let input = document.querySelector('#time').innerHTML;
  if(input <= 12){
    console.log('Good Morning');
  }else if(input >= 12 && input <= 5){
    console.log('Good afternoon');
  }else if(input <= 12){
    console.log('Good Morning');
  }
}
/* Write your implementation of displayMessage() */
