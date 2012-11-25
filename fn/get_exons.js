var START = ['ATG'];
var STOP = ['TAA', 'TGA', 'TAG']

/*
 * Extract and return exons
 */

function isStartCodon(codon){
  return START.indexOf(codon)>-1;
}

function isStopCodon(codon){
  return STOP.indexOf(codon)>-1;
}

module.exports = function(seq){
  var exons = '';
  var copy = false;
  for (var i=0; i<seq.length; i+=3){
    var codon = seq.substr(i, 3);
    if (isStartCodon(codon)) copy = true;
    exons+= copy ? codon : '';
    if (isStopCodon(codon)) copy = false;
  }
  return exons;
};
