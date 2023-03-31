// not UI logic

function getInput(event){
  event.preventDefault();
  const num1 = parseInt(document.querySelector("input#num1").value);
  transform(num1);  
}

function transform(num){

  if(num === 1){
    console.log("beep");
  } else if (num === 2){
    console.log("boop");
  } else{
    console.log("the hood");
  }
  let numArray = [];
  for(let i =0; i<=num; i++){
    numArray.push(i);
    
  }
  console.log(numArray);
}


// UI logic

window.addEventListener("load", function(){
  const num = document.querySelector("form#num");
  num.addEventListener("submit", getInput);
});
