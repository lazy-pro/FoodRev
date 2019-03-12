const Zomato = require('zomato.js');
const z = new Zomato('ae82a0ef896c61c6d5e1d4cac2e4ae24');

z.search({
    entity_type:'city',
    entity_id:24,
    start: 100
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });