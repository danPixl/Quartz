// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var fs = require('fs');
if (fs.existsSync("quartz-server.txt")) {
    fs.readFile("quartz-server.txt", 'utf8', function(err, data) {
      console.log('OK: ' + "quartz-server.txt");
      console.log(data)
      const server_url = data
    });
}