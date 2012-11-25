var fs = require('fs');

//functions
var sanitize_seq = require('../fn/sanitize_sequence.js')
, seq = 'ATGGTTTAATGGTATATGTCTTAG'
// seq has 2 exon segments each 9 nucleotides long
, get_gc_content = require('../fn/get_gc_content.js');

//sanitize
seq = sanitize_seq(seq);

console.log('testing seq of length', seq.length, 'gc_content');

console.log('gc content', get_gc_content(seq));
