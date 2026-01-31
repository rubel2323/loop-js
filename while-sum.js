let num = 81;
let sum = 0;
while (num <= 100) {
  if (num % 2 !== 0) {
    sum = sum + num;

    console.log("The sum is ", sum);
  }
  num++;
}

let num2 = 206;
let sum2 = 0;
while (num2 <= 311) {
  if (num2 % 2 === 0) {
    sum2 = sum2 + num2;
    console.log("The sum of even numbers is ", sum2);
  }
  num2++;
}
