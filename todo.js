document.getElementById("task").innerHTML = "LIST TASK";

document.getElementById("Box2").innerHTML = "NO-ITEMS IN THE LIST";

function closePopUp(){
  document.querySelector('.popup').style.visibility = "hidden";
  document.getElementById("Box2").style.visibility = "visible" ;
}

function showpopup(){
  document.getElementById("Box2").style.visibility = "hidden" ;
  document.querySelector('.popup').style.visibility = "visible";
  // document.querySelector('.cards').style.visibility = "hidden";
  
}

function openCards() {
  document.getElementById("Box2").style.visibility = "hidden" ;
  document.querySelector('.popup').style.visibility = "hidden";
  document.getElementById("cards").style.visibility = "visible"

  // var cardOpen = document.getElementsByClassName("cards").innerHTML;
}

function openCards(){
  document.querySelector('.cards').style.visibility = "visible";
   var firstCradHeading = document.getElementById("datafill").value;
   var inputText = firstCradHeading;
   document.getElementById("heading").innerHTML = inputText;
}

function delet() {
  document.querySelector('.cards').style.visibility = "hidden";
}

function addTask() {
  document.getElementsByClassName('popup').innerHTML;
}










