process.stdout.write('hello from spinner2.js... \rheyyy\n');

const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

let time = 100;

for (const char of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, time);
  time += 200;
}

setTimeout(() => {
  process.stdout.write('\n');
}, time);