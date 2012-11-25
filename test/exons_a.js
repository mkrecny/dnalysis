//modules
var fs = require('fs');

//functions
var sanitize_seq = require('../fn/sanitize_sequence.js')
, seq = fs.readFileSync('../data/s1.dna', 'utf8') //s1 is 100% exon
, get_exons = require('../fn/get_exons.js');

//sanitize
seq = sanitize_seq(seq);

console.log('testing seq of length', seq.length);

var exons = get_exons(seq);

console.log('exon len', exons.length);

if (exons.length===seq.length){
  console.log('test passed');
} else {
  console.log('test failed');
}
