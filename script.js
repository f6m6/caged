function next() { 
    document.getElementById("exercise").textContent = "E major scale";
    document.getElementById("position").innerHTML = "5";
};

var scales = [
    "minor",
    "major",
    "minor pentatonic",
    "major pentatonic"
];

var positions = [1, 2, 3, 4, 5];

var letters = ["A", "B", "C", "D", "E", "F", "G"];

var accidentals = ["", "♯", "♭"];

for (i = 0; i <= 2; i += 1) {
    document.writeln(accidentals[i]);
}