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
  var propKey = ["res_id", "name", "url", "address", "city_id", "latitude", "longitude", "country_id",
    "locality_verbose", "switch_to_order_menu", "cuisines", "average_cost_for_two", "price_range",
    "currency", "is_book_form_web_view", "aggregate_rating", "rating_text", "rating_color", "votes",
    "has_fake_reviews", "has_online_delivery", "is_table_reservation_supported", "has_table_booking"]
  var obj = JSON.parse(json)
  var ans = []
  for (var i = 0; i < obj.length; i++) {
    var itr = obj[i]["restaurants"];
    for (var k = 0; k < itr.length; k++) {
      var item = itr[k]
      var toAdd = {}
      for (var j = 0; j < propKey.length; j++) {
        var key = propKey[j]
        if (item.hasOwnProperty(key)) {
          toAdd[key] = item[key];
        }
        else if((item["location"]).hasOwnProperty(key)){
          toAdd[key] = item["location"][key];
        }
        else if((item["user_rating"]).hasOwnProperty(key)){
          toAdd[key]=item["user_rating"][key]
        }
      }
      ans.push(toAdd)
    }
  }
  var answer = JSON.stringify(ans)
  console.log(answer)
});

/*
    "business_id": "tnhfDv5Il8EaGSXZGiuQGg","name": "Garaje",
    "address": "475 3rd St","city": "San Francisco","state": "CA","postal code": "94107",
    "latitude": 37.7817529521,"longitude": -122.39612197,"stars": 4.5,"review_count": 1198,
    "is_open": 1,"attributes": {
        "RestaurantsTakeOut": true,
        "BusinessParking": {
            "garage": false
        },},"categories": [
        "Mexican",
        "Burgers",
        "Gastropubs"],"hours"}

reference for iterating over json in js
var obj = {a: 1, b: 2};
for (var key in obj) {
  if (obj.hasOwnProperty(key)) {
    var val = obj[key];
    console.log(val);
  }
}*/