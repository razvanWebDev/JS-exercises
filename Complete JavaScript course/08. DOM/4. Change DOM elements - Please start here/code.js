//change html content
var p1 = document.getElementById("p1");
p1.innerHTML = "Javascript is fun!";
var p2 = document.getElementById("p2");
p2.innerHTML += " This is nr 2";
var p3 = document.getElementById("p3");
p3.textContent = "Some new text";
var link = document.getElementById("link");
link.setAttribute("href", "http://wikipedia.org");

//change HTML styling
p1.style.backgroundColor = "pink";
p2.style.display = "none";
p3.style.color = "orange";
p3.style.position = "fixed";
p3.style.top = "100px";
p3.style.left = "300px";

//using thr forEach, add a new make for each list
var lists = document.getElementsByTagName("ul");
HTMLCollection.prototype.forEach = Array.prototype.forEach;
lists.forEach(list => {
  var newLi = document.createElement("li");
  var ford = document.createTextNode("Ford");
  var newCar = newLi.appendChild(ford);
  list.appendChild(newCar);
});

var green = document.getElementsByClassName("green");
green.forEach(function(element){
    element.style.color = 'blue';
})