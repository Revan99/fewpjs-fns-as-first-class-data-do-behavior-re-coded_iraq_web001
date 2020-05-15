/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time){
  if (time < 12){
    time += 12;
  }
  if(time >= 12 ){
    return "Good Morning"
  }
}
function displayMessage(msg) {
  let message = document.querySelector('#greeting');
  message.innerHTML = msg;
}
