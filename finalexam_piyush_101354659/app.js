const fs = require('fs');

const readable = fs.createReadStream('data.txt');

const writable = fs.createWriteStream('output.txt');

readable.on('readable', () => {
  let data;

  while (null !== (data = readable.read())) {
    console.log(data);
    console.log(`${data}`);
    writable.write(`${data}`);
  }
});

readable.on('end', () => {
  console.log('Write is Completed');
});
