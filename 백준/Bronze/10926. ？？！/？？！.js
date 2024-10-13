const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.on('line', function(line) {
    console.log(line + '??!');
    readline.close();
});
