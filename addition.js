let addition = 0;
for (let i = 1; i <= 50; i++) {
  addition += i;
  console.log("Current addition is", addition);

  if (addition >= 100) {
    console.log("Addition has reached 100");
    break;
  }
}
