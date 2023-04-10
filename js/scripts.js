// Utility Logic
//function that gets a random hex value - to be used with setAtrribute
function randomColor(){
  let c = "color: #";
  for(let i = 0; i<6; i++){
    const rando = Math.round(Math.random() *15);
    if(rando === 10){
      c+="A";
    } else if(rando === 11){
      c+="B";
    } else if(rando === 12){
      c+="C";
    } else if(rando === 13){
      c+="D";
    } else if(rando === 14){
      c+="E";
    } else if(rando === 15){
      c+="F";
    } else{
      c+=rando;
    }
  }
  //console.log(c);
  return c;
}

// Business Logic

function getInput(){
  return parseInt(document.querySelector("input#num1").value);
}

function getName(){
  const name = document.querySelector("input#name1").value
  if(name === ""){
    return ",";
  } else{
    return " " + name;
  }
}

function transform(isReversed){
  const num = getInput();
  const name = getName();
  let numArray = [];

  for(let i =0; i<=num; i++){
    let iArray = i.toString().split("");
    if(iArray.includes("3")){
      numArray.push(" Welcome to the hood" + name + " enjoy your stay!");
    } else if (iArray.includes("2")){
      numArray.push(" Boop!");
    } else if(iArray.includes("1")){
      numArray.push(" Beep!");
    } else{
      numArray.push(" "+i);
    }   
  }
  // numArray                         - for words / whole sections
  // numArray.join("").split("")      - for each character
  numArray = numArray.join("").split("");
  if(isReversed){
    displayResults(numArray.reverse());
  } else {
    displayResults(numArray);
  }
}

// UI logic

window.addEventListener("load", function(){
  const num = document.querySelector("button#go");
  const rev = document.querySelector("button#reversed");
  const noFun = document.querySelector("button#noFun");
  num.addEventListener("click", notTransformReverse);
  rev.addEventListener("click", transformReverse);
  noFun.addEventListener("click", noFunForMe);
});

function updateUI(choice){
  if(choice === 1){
    document.querySelector("#go").innerText ="More Fun!";
  } else if(choice === 3){
    document.querySelector("#crazyIdea").setAttribute("class", "hidden");
    //change buttons
    document.querySelector("#results").setAttribute("class","a");
    document.querySelector("button#go").setAttribute("class","hidden");
    document.querySelector("button#reversed").setAttribute("class","hidden");
    document.querySelector("#noFunZone").innerText = "";
    document.querySelector("#noFunZone").append("Wow... I did't really expect you to click that");
  }
}

function displayResults(numArray){
  document.querySelector("p#results").innerText ="";
  document.querySelector("p#crazyIdea").innerText = "";
  document.querySelector("p#results").append(numArray.join(""));

  numArray.forEach(function (element){
    // console.log(element)
    const sp1 = document.createElement("span");
    sp1.append(element);
    sp1.setAttribute("style", randomColor());
    const targetResults = document.querySelector("#crazyIdea");
    targetResults.append(sp1);
  });
}

// 3 paths to get to main logic that pass bool that will be used to reverse array if needed
function notTransformReverse(event){
  event.preventDefault();
  updateUI(1);
  transform(false);
}

function transformReverse(event){
  event.preventDefault();
//  updateUI(2);
  transform(true);
}

function noFunForMe(event){
  event.preventDefault();
  updateUI(3);
  transform(false);
}