// not UI logic

function getInput(event){
  event.preventDefault();
  const num1 = parseInt(document.querySelector("input#num1").value);
  transform(num1);  
}

function transform(num){
  console.log(num);
}


// UI logic

window.addEventListener("load", function(){
  const num = document.querySelector("form#num");
  num.addEventListener("submit", getInput);
});
