const request = require('request');
const fs = require('fs');

const [url = null,localPath = null] = process.argv.slice(2);
if (localPath === null && url === null) {
  console.log("PLEASE ENTER A URL AND A PATH");
  process.exit();
}
if (localPath === null) {
  console.log("INVALID PATH");
  process.exit();
}
request(url, (err, _, body) => {
  if (err) {
    console.error('INVALID URL');
  }
  if (body) {
    fs.writeFile(localPath, body, err => {
      if (err) {
        console.log(err);
      }
    });
    if (!err) {
      console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`);
    }
  }
});





