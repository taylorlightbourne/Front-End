// welcome page script
const contents = document.querySelector("#quoteAPI");
const key = "9607730c37d005ee6fa9fb6d618c9cfb53885152"

const quoteData = async () => {
    let getQuoteData = await fetch(`https://zenquotes.io/api/random/${key}`, { mode: 'no-cors'});
    let formatQuote = await getQuoteData.json();
    for (let quote of formatQuote.data) {
        console.log(quote);
        const quoteContainer = document.createElement("h3");
        quoteContainer.classname = "randomQuote";
        quoteContainer.innerHTML = quote['q'];
        const authorContainer = document.createElement("h4");
        authorContainer.classname = "author";
        authorContainer.innerHTML = quote['a'];
        contents.append(quoteContainer, authorContainer);
    }
    return formatQuote;
}
quoteData();

// const quoteData = () => {
//     fetch(`https://zenquotes.io/api/random/${key}`, { mode: 'no-cors'})
    
//     .then((response) => response.json())
//     .then((data) =>  {
//         console.log(data)
//         const quoteContainer = document.createElement("h3");
//         quoteContainer.classname = "randomQuote";
//         quoteContainer.innerHTML = data['q'];
//         const authorContainer = document.createElement("h4");
//         authorContainer.classname = "author";
//         authorContainer.innerHTML = data['a'];
//         contents.append(quoteContainer, authorContainer);
//     })
// };

// quoteData();

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
