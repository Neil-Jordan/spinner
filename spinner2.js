let delay = 200;
const animation = ['|', '/', '-', '\\'];
const timeout = delay * animation.length;

const loopAnimation = setInterval(() => {
  for (let i = 0; i < animation.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r  ${animation[i]}`);
    }, delay * i);
  }
}, timeout);

//function to stop the loop animation without having to Ctrl+C?





/*{ setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 700);}
*/