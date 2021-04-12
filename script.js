// generator script
const audioA = document.getElementById("audioA");
const audioB = document.getElementById("audioB");
const audioC = document.getElementById("audioC");
const audioD = document.getElementById("audioD");
const audioE = document.getElementById("audioE");
const audioF = document.getElementById("audioF");
const audioG = document.getElementById("audioG");

// play and pause functions
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

//loop function
function enableLoop() { 
  audioA.loop = true;
  audioA.load();
} 

//<html>
// <button onclick="enableLoop()" type="button">Enable loop</button>
// <button onclick="disableLoop()" type="button">Disable loop</button>
// <button onclick="checkLoop()" type="button">Check loop status</button>
// let loopA = document.getElementById("noteA");

// function enableLoop() { 
//   loopA.loop = true;
//   loopA.load();
// } 

//music script
// const musicContainer = document.querySelector(".music-contents");

// const musicData = async () => {
//     let getMusicData = await fetch("https://api.spotify.com");
//     let formatMusic = await getMusicData.json();

//     for (let music of formatMusic.data) {
      
//     }
//     return formatMusic;
// }