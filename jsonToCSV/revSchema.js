if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
  }
  
  // Read the file and print its contents.
  var fs = require('fs'), filename = process.argv[2];
  fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
  
    var fineop = eval('(' + data + ')');
    var json = JSON.stringify(fineop);
    //console.log(json)
    var propKey =[ "rating","review_text","review_time_friendly","rating_text","likes",
    "foodie_level_num"]
    var obj = JSON.parse(json)
    var ans = []
    for (var i = 0; i < obj.length; i+=2) {
      var itr = obj[i]["user_reviews"];
      var res_id = obj[i+1]["res_id"];
      for (var k = 0; k < itr.length; k++) {
        var item = itr[k]
        var toAdd = {"id":res_id}
        for (var j = 0; j < propKey.length; j++) {
          var key = propKey[j]
          if (item.hasOwnProperty(key)) {
            toAdd[key] = item[key];
          }
          else if((item["user"]).hasOwnProperty(key)){
            toAdd[key] = item["user"][key];
          }
        }
        ans.push(toAdd)
      }
    }
    var answer = JSON.stringify(ans)
    console.log(answer)
  });
  
  /*
  reference for iterating over json in js
  var obj = {a: 1, b: 2};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      var val = obj[key];
      console.log(val);
    }
  }*/