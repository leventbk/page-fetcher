//function1 make an http request and wait for the response.

//function2 After the http request is complete, you need to take the data you receive and write it to a file in your local filesystem.

const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const localPath = process.argv[3];

const fetchAndSave = function(url, localPath) {
  request(url, (error, response, body) => {
    if (error) {
      console.log('Oops! Failed to download resouce: ', error);
      return;
    }
    fs.writeFile(localPath, body, (error) => {
      if (error) {
        console.log('Dude! is localPath has an issue!:', localPath);
      } else {
        console.log(`Awesome! Download size: ${body.length} Doc.address: ${localPath}`);
      }
    });
  });
};

if (!url || !localPath) {
  console.log('Dude! please enter both parameters');
  console.log(`like; node fetcher.js <url> <local-path>`);
} else {
  fetchAndSave(url, localPath);
}

