const Zomato = require('zomato.js');
const z = new Zomato('9227785c9601f6f8312a098adf3337a7');

if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
}

var fs = require('fs'), filename = process.argv[2];
fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw (err);
    let obj = JSON.parse(data);
    let i = 0;
    async function foo(res, rej) {
        try {
            await new Promise(async (resolve, reject) => {
                try {
                    if (obj.length == 0) return resolve();
                    let funSync = async () => {
                        await z.reviews({
                            res_id: obj[i]["id"],
                        })
                            .then(function (data) {
                                console.log(data);
                            }).then(() => {
                                var resIdAfterthis = { "res_id": obj[i]["id"] };
                                var res = JSON.stringify(resIdAfterthis);
                                console.log("," + res + ",");
                            })
                            .catch(function (err) {
                                console.error(err);
                            });

                        i++;
                        if (i == obj.length) resolve();
                        else funSync();
                    }
                    funSync();
                } catch (e) {
                    reject(e);
                }
            })
        } catch (er) {
            rej(er);
        }
    };
    foo();
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

