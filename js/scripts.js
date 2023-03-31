// not UI logic

function getInput(){
  return parseInt(document.querySelector("input#num1").value);
}

function getName(){
  const name = document.querySelector("input#name1").value
  if(name === ""){
    return ","
  } else{
    return " " + name;
  }
}

function transformReverse(event){
  event.preventDefault();
  transform(true);
}

function notTransformReverse(event){
  event.preventDefault();
  transform(false);
}

function transform(isReversed){
  console.log(isReversed);
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
  if(isReversed){
    displayResults(numArray.reverse());
  } else {
    displayResults(numArray);
  }
}

// UI logic

window.addEventListener("load", function(){
  const num = document.querySelector("button#go");
  const rev = document.querySelector("button#reversed")
  num.addEventListener("click", notTransformReverse);
  rev.addEventListener("click", transformReverse);


  const sp1 = document.createElement("span");
  sp1.append("hi");
  const targetResults = document.querySelector("#crazyIdea")
  targetResults.append(sp1);
  console.log(sp1);
});

function displayResults(numArray){
  document.querySelector("p#results").innerText = numArray;
  
}