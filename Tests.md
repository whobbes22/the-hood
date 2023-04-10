Describe transform();

test: will return the number submitted
Code: num= 3;
      transform(num);
output: 3

test: will return an array of numbers until the inputted number is reached
code: num = 3;
      transform(num);
output: [0,1,2,3]

test: will return desired output if a 1 is inputted
code: num = 1
      transform(num);
output: "Beep!"

test: will return desired output if a 2 is inputted
code: num = 2
      transform(num);
output: "Boop!"

test: will return desired output if 3 is inputted
code: num = 3
      transform(num);
output: "Won't you be my neighbor?"

test: will replace return desired output in an array of numbers if input is <10
code: num = 9;
      transform(num);
output: [0,Beep!,Boop!, Won't you be my neighbor?,4,5,6,7,8,9]

test: will subsitute based on most significant digit of 3
code: num = 31
      transform (num);
output: Won't you be my neighbor?

test: will subsitute based on most significant digit of 3
code: num = 32
      transform (num);
output: Won't you be my neighbor?

test: will subsitute based on most significant digit of 3
code: num = 23
      transform (num);
output: Won't you be my neighbor?

test: will return the transform numbers in an array 
code: num = 14;
      transform(num);

output: [0, "Beep", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!"]

test: will reverse an array if true is passed into it
code: rev = true;
      input = 1;
      transform(rev);

output: !peeB 0

Describe randomColor()
test: will generate a string with a random 6 digit hex value at the end
code: randomColor()

output: "color: #ffffff" -> output will change everytime because it is random