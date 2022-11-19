const fs = require('fs');

const readStream = fs.createReadStream('data.txt');

readStream.on('readable', () => {
  let data;

  while (null !== (data = readStream.read())) {
    console.log(data);
    const parsedData = data.toString();
    console.log(parsedData);
    fs.createWriteStream('output.txt').write(parsedData);
  }
});

readStream.on('end', () => {
  console.log('Write is completed');
});
