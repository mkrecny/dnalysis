module.exports = function(seq){
  seq = seq.replace(/\s+/g, '');
  seq = seq.toUpperCase();
  return seq;
}
