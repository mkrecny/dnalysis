//modules
var fs = require('fs');

//functions
var sanitize_seq = require('../fn/sanitize_sequence.js')
, seq = 'ATGGTTTAATGGTATATGTCTTAG'
// seq has 2 exon segments each 9 nucleotides long
, get_exons = require('../fn/get_exons.js');

//sanitize
seq = sanitize_seq(seq);

console.log('testing seq of length', seq.length);

var exons = get_exons(seq);

console.log('exon len', exons.length);

if (exons.length===18){
  console.log('test passed');
} else {
  console.log('test failed');
}
