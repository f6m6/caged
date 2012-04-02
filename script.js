function init() {
    next();
}

window.onload = init;

function next() { 
    document.getElementById("exercise").textContent = randomExercise();
    document.getElementById("position").innerHTML = randomPosition();
    document.getElementById("next").focus();
}

function random(n) {
    return Math.floor(Math.random()*(1+n));
}

function randomPosition() {
    return 1 + random(4);
}

function randomScale() {
    return scales[random(3)];
}

function randomLetter() {
    return letters[random(6)];
}

function randomAccidental() {
    return accidentals[random(2)];
}

function randomExercise() {
    return randomLetter() +  randomAccidental() + " " + randomScale() + " scale";
}

var scales = [
    "minor",
    "major",
    "minor pentatonic",
    "major pentatonic"
]

var positions = [1, 2, 3, 4, 5]

var letters = ["A", "B", "C", "D", "E", "F", "G"]

var accidentals = ["", "\u266f", "\u266d"]
