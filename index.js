/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time){
  
  if(input < 12){
    return 'Good Morning';
  }else if(input >= 12 && input < 5){
    return 'Good Afternoon';
  }else if (input >= 5){
   return 'Good Evening';
  }
}
function displayMessage(msg) {
  let message = document.querySelector('#greeting');
  message.innerHTML = msg;
}
