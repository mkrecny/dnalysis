var get_exons = require('./get_exons.js');

module.exports = function(seq){
  var exons = get_exons(seq);
  return (exons.length/seq.length);
}
