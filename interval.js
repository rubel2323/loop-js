// for (let i = 81; i >= 65; i--) {
//   console.log(i);
// }

let count = 81;
const timer = setInterval(() => {
  console.log(count);
  count--;

  if (count < 65) {
    clearInterval(timer);
  }
}, 100);
