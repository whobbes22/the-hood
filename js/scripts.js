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
    
   // console.log(transferArray.includes(i),i);
    let iArray = i.toString().split("");
    console.log(iArray.includes("1"),iArray.includes("2"),iArray.includes("3"));
    
    console.log(iArray);

  if(iArray.includes("3")){
    numArray.push("The hood");
  } else if (iArray.includes("2")){
    numArray.push("Boop!");
  } else if(iArray.includes("1")){
    numArray.push("Beep!");
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
