if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
  }
  // Read the file and print its contents.
  var fs = require('fs')
    , filename = process.argv[2];
  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;
    //console.log(data)
    var xy = eval('(' + data + ')');
    var json = JSON.stringify(xy);
    //console.log('OK: ' + filename);
    console.log(json)
  });