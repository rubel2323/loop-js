let sum = 0;
for (j = 1; j <= 100; j++) {
  if (j % 3 == 0 && j % 5 == 0) {
    console.log(j);
    sum += j;
    console.log("Sum till now is:", sum);
  }
}
