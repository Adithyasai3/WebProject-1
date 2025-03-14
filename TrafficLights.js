let trafficLightRedElement = document.getElementById("trafficLightRed");
let trafficLightYellowElement = document.getElementById("trafficLightYellow");
let trafficLightGreenElement = document.getElementById("trafficLightGreen");

function changebgTored() {
    trafficLightRedElement.style.backgroundColor = "#FF0000";
    trafficLightYellowElement.style.backgroundColor = "";
    trafficLightGreenElement.style.backgroundColor = "";
}

function changebgToyellow() {
    trafficLightYellowElement.style.backgroundColor = "#FFD700";
    trafficLightRedElement.style.backgroundColor = "";
    trafficLightGreenElement.style.backgroundColor = "";
}

function changebgTogreen() {
    trafficLightGreenElement.style.backgroundColor = "#008000";
    trafficLightRedElement.style.backgroundColor = "";
    trafficLightYellowElement.style.backgroundColor = "";
}