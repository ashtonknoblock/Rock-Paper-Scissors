var myArray = ["Rock","Paper","Scissors"];

var click = function(event) {
    var oppChoice = myArray[Math.floor(Math.random()*3)];
    var myChoice = event.target;
    var userChoice = myChoice.innerHTML;
    var vs =document.getElementById("vs");
    var text =document.createTextNode("Computer chose" + " " + oppChoice + ", and you chose" + " " +userChoice + " ");
    vs.appendChild(text);
    vs.appendChild(document.createElement("br"));

 
    if ((oppChoice == "Scissors") && (userChoice == "Rock") 
    || (oppChoice == "Rock") && (userChoice == "Paper")
    || (oppChoice == "Paper") && (userChoice == "Scissors")) {
        alert("You Win!")
}
    else if ((oppChoice == "Scissors") && (userChoice == "Scissors") 
    || (oppChoice == "Rock") && (userChoice == "Rock")
    || (oppChoice == "Paper") && (userChoice == "Paper")) {
        alert("Issa Draw!")
}
    else alert("hah you lose")
}

var choices = document.getElementsByClassName('choices')
for (i=0;i<choices.length; i++) {
    choices[i].addEventListener('click', click);
};