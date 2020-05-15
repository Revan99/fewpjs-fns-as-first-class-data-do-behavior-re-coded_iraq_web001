/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time){
  time = time.split(0,indexOf(':'));
  time = time.parseInt();
  if (time <= 12)
    return 'GoodMorning';
  }
function displayMessage(msg) {
  let message = document.querySelector('#greeting');
  message.innerHTML = msg;
}
