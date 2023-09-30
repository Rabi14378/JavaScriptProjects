var numColor=6;
var colors=[];
var correctColor;

var squares=document.querySelectorAll(".square");
var resultDisplay=document.getElementById("message");
var colorDisplay=document.querySelector("#colorDisplay");
var h1=document.querySelector("h1");
var gameButtons=document.querySelectorAll(".gameButtons");

buttons();

reset();

result();

function result(){
	for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;
		if (clickedColor===correctColor) {
			correctDisplay();
		}else{
			resultDisplay.textContent="Incorrect!";
			resultDisplay.style.color=clickedColor;
			this.style.backgroundColor="#232323";
		}

	});
}
}

function correctDisplay(){
	resultDisplay.textContent="Correct!";
	gameButtons[0].textContent="Play Again?";
	resultDisplay.style.color=correctColor;
	h1.style.backgroundColor=correctColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor=correctColor;
		}
}

function buttons(){
	for (var i = 0; i < gameButtons.length; i++) {
	gameButtons[i].addEventListener("click",function(){
		if (this===gameButtons[0]) {
			reset();
		}else if (this===gameButtons[1]) {
			numColor=3;
			reset();
			removeSelected();
			simpleLevel();
			this.classList.add("selected");
		}else if (this===gameButtons[2]) {
			numColor=6;
			reset();
			removeSelected();
			simpleLevel();
			this.classList.add("selected");
		}else{
			numColor=12;
			reset();
			removeSelected();
			this.classList.add("selected");
			hardLevel();
			}
		});
	}
}

function hardLevel(){
	for (var i = 0; i < squares.length; i++) {
				squares[i].classList.add("hardLevel");
			}
}

function simpleLevel(){
	for (var i = 0; i < squares.length; i++) {
				squares[i].classList.remove("hardLevel");
			}
}

function correctColorPicker(){
	var color=Math.floor(Math.random()*colors.length);
	return colors[color];
}

function colorGenerator(){
	var red=Math.floor(Math.random()*256);
	var green=Math.floor(Math.random()*256);
	var blue=Math.floor(Math.random()*256);
	return "rgb(" + red + ", " + green + ", " + blue +")";
}

function colorList(num){
	var colorsArray=[];
	for (var i = 0; i < num; i++) {
		colorsArray[i]=colorGenerator();
	}
	return colorsArray;
}

function reset(){
	initialDisplay();
	squaresDisplay();
}

function squaresDisplay(){
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		}else{
			squares[i].style.display="none";
		}
	}
}

function initialDisplay(){
	colors=colorList(numColor);
	resultDisplay.textContent="";
	correctColor=correctColorPicker();
	h1.style.backgroundColor="steelblue";
	gameButtons[0].textContent="New Colors";
	colorDisplay.textContent=correctColor;
}

function removeSelected(){
	for (var i = 0; i < gameButtons.length; i++) {
		gameButtons[i].classList.remove("selected");
	}
}
