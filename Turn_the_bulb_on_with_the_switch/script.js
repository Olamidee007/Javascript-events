// Target switch, bulb image and input field
const switchBtn = document.getElementById('rectangleBtn')
const switchBtnInput = document.getElementById('id_switch')
const myImage = document.getElementById('myImage')


// Function : Check if the checkbox checked, display the right bulb
function toggleBulb(){

  if (switchBtnInput.checked === false) {
    myImage.src = "img/bulb on.gif"
  }
  else if (switchBtnInput.checked === true) {
      myImage.src = "img/bulb off.png"
  }
}

// Add event handler to switch
switchBtn.addEventListener('click', toggleBulb)
