var fs = require('fs');
var syns = fs.readFileSync(__dirname+'/../data/synonyms.raw', 'utf8').split('\n');
var map = {};

syns.forEach(function(str, i){
  str = str.replace(/\s+/g, '');
  syns[i] = str.split(',');
});

syns.forEach(function(group){
  if (group.length>1){
    group.forEach(function(codon, i){
      map[codon] = [];
      for (var j=0; j<group.length; j++){
        if (i!==j){
          map[codon].push(group[j]);
        }
      }
    });
  }
});

console.log(JSON.stringify(map));
