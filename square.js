// let square = 0;
// for (let i = 2; i <= 20; i++) {
//   square = i * i;
//   console.log("The square of", i, "is", square);

//   if (square == i * i) {
//     console.log("Square of 2 is reached");
//     break;
//   }
// }
for (let i = 2; i <= 100; i++) {
  console.log("Current number is", i);

  let root = Math.sqrt(i);
  if (Number.isInteger(root)) {
    console.log("The first square root of", i, "is", root);
    break;
  }
}
