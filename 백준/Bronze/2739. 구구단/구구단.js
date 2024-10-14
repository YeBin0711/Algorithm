const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on("line", function (line) {
    input = line.split(" ").map((el) => parseInt(el));
  })
  .on("close", function () {
    for(let i = 1; i< 10; i++){
        let answer = input[0]*i;
        console.log(`${input[0]} * ${i} = ${answer}`);
        }
    process.exit();
  });