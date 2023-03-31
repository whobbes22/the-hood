// not UI logic

function getInput(event){
  event.preventDefault();
  const num1 = parseInt(document.querySelector("input#num1").value);
  transform(num1);  
}

function transform(num){

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
