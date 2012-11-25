function get_segments_list(n){
  var segs = [];
  for (var i=0;i<n;i++){
    segs[i]=0;
  }
  return segs;
}

function get_segment_index(nsegs, seq_len, i){
  var seg_len = seq_len/nsegs;
  return Math.floor(i/seg_len);
}

module.exports = function(seq, nsegs, is_feature){
  var seq_len = seq.length;
  var segments = get_segments_list(nsegs);
  for (var i=0; i<seq_len; i++){
    if(is_feature(seq, i)){
      segments[get_segment_index(nsegs, seq_len, i)]+=1;
    }
  }
  return segments;
}
