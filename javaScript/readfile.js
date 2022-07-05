//read filenames in the folder
const fs = require('fs');
const folderPath = './';

fs.readdir(folderPath, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});

//read file
//const fs = require('fs');

let readDataCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong: ${err}`);
  } else {
    console.log(`Provided file contained: ${data}`);
  }
};
 
fs.readFile('./data.txt', 'utf-8', readDataCallback);

//read stream
//const fs = require('fs');
const readline = require('readline');
 
const myInterface = readline.createInterface({
  input: fs.createReadStream('./data.txt')
});

const printData = (data) => {
    console.log(`Line: `+data);
};

myInterface.on('line', printData);


