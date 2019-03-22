const Zomato = require('zomato.js');
const z = new Zomato('9227785c9601f6f8312a098adf3337a7');

z.reviews({
    res_id: 2400052,
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.error(err);
  });