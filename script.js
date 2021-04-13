// welcome page script

const quoteData = () => {
    fetch("http://quotes.rest/qod.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const contents = document.querySelector("#quoteAPI");
        const quoteContainer = document.createElement("p");
        quoteContainer.classname = "randomQuote";
        quoteContainer.innerHTML = data['contents']['quotes'][0]['quote'];
        const authorContainer = document.createElement("p");
        authorContainer.classname = "author";
        authorContainer.innerHTML = "~ " + data['contents']['quotes'][0]['author'];
        contents.append(quoteContainer, authorContainer);
      });
  };
quoteData();

// generator script
const audioA = document.getElementById("audioA");
const audioB = document.getElementById("audioB");
const audioC = document.getElementById("audioC");
const audioD = document.getElementById("audioD");
const audioE = document.getElementById("audioE");
const audioF = document.getElementById("audioF");
const audioG = document.getElementById("audioG");

// play and pause functions - generator
function playA() {
    audioA.play();
}
function stopA() {
    audioA.pause();
}
function playB() {
    audioB.play();
}
function stopB() {
    audioB.pause();
}
function playC() {
    audioC.play();
}
function stopC() {
    audioC.pause();
}
function playD() {
    audioD.play();
}
function stopD() {
    audioD.pause();
}
function playE() {
    audioE.play();
}
function stopE() {
    audioE.pause();
}
function playF() {
    audioF.play();
}
function stopF() {
    audioF.pause();
}
function playG() {
    audioG.play();
}
function stopG() {
    audioG.pause();
}


