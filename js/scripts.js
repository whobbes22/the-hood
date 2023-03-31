// not UI logic

function getInput(){
  const num1 = parseInt(document.querySelector("input#num1").value);
  return num1;
}

function transform(event){
  event.preventDefault();
  const num = getInput();
  let numArray = [];

  for(let i =0; i<=num; i++){
    let iArray = i.toString().split("");
    if(iArray.includes("3")){
      numArray.push(" The hood");
    } else if (iArray.includes("2")){
      numArray.push(" Boop!");
    } else if(iArray.includes("1")){
      numArray.push(" Beep!");
    } else{
      numArray.push(" "+i);
    }   
  }
  displayResults(numArray);
}

// UI logic

window.addEventListener("load", function(){
  const num = document.querySelector("form#num");
  num.addEventListener("submit", transform);
});

function displayResults(numArray){
  document.querySelector("p#results").innerText = numArray;
}