var fs = require('fs');

//functions
var sanitize_seq = require('../fn/sanitize_sequence.js')
, seq = 'ATGGTTTAATGGTATATGTCTTAG'
// seq has 2 exon segments each 9 nucleotides long
, get_exon_density = require('../fn/get_exon_density.js');

//sanitize
seq = sanitize_seq(seq);

console.log('testing seq of length', seq.length, 'density');

console.log('exon density', get_exon_density(seq));

/*if (exons.length===18){
  console.log('test passed');
} else {
  console.log('test failed');
}*/
