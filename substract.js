function subtract(a,b) {
  a=a.split``.map(x=>+x).reverse``,b=b.split``.map(x=>+x).reverse``;
  var i, r=Array.from(a);
  for ( i=0; i<b.length; i++ )
    r[i] -= b[i];
  for ( i=0; i<r.length-1; i++ )
    if ( r[i]<0 )
      r[i+1] -= 1,r[i] += 10;
  r.reverse``;
  while (r[0]===0) r.shift``;
  return r.join("")||"0";
}