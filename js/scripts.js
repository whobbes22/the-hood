// not UI logic

function getInput(event){
  event.preventDefault();
  const num1 = parseInt(document.querySelector("input#num1").value);
  transform(num1);  
}

function transform(num){

  let numArray = [];
  let transferArray = [1,2,3];
  for(let i =0; i<=num; i++){
    
    console.log(transferArray.includes(i),i);
    let iArray = i.toString().split("");
    console.log(iArray);

  if(i === 1){
    numArray.push("beep");
  } else if (i === 2){
    numArray.push("boop");
  } else if(i === 3){
    numArray.push("the hood");
  } else{
    numArray.push(i);
  }
    
  }
  console.log(numArray);
}


// UI logic

window.addEventListener("load", function(){
  const num = document.querySelector("form#num");
  num.addEventListener("submit", getInput);
});
