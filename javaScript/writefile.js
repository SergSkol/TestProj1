//write stream
const fs = require('fs');
const readline = require('readline');

const myInterface = readline.createInterface({
  input: fs.createReadStream('data.txt')
});

const fileStream = fs.createWriteStream('output.txt');

const transformData = (line)=>{
  fileStream.write(`They were out of: ${line}\n`); 
};

myInterface.on('line', transformData);