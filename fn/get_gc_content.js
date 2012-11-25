var get_exons = require('./get_exons.js');

module.exports = function(seq){
  var gc_count = 0;
  for (var i=0; i<seq.length; i++){
    var char = seq.charAt(i);
    if (char=='G' || char=='C'){
      gc_count+=1;
    }
  }
  return gc_count/seq.length;
}
