test: will return the number submitted
Code: num= 3;
      transform(num);
output: 3

test: will return an array of numbers until the inputted number is reached
code: num = 3;
      transform(num);
output: [0,1,2,3]

test: will return desired output if a 1,2, or 3 is inputted
code: num = 1 || num = 2 || num = 3
      transform(num);
output: "Beep! || Boop! || Won't you be my neighbor?

test: will replace return desired output in an array of numbers if input is <10
code: num = 9;
      transform(num);
output: [0,Beep!,Boop!, Won't you be my neighbor?,4,5,6,7,8,9]

test: will subsitute based on if the number has a 3 > 2 > 1 
code: num = 31 || 32 || 23
      transform (num);
output: Won't you be my neighbor? || Won't you be my neighbor? || Won't you be my neighbor?

test: will return the transform numbers in an array 
code: num = 14;
      transform(num);

output: [0, "Beep", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!"]

******

