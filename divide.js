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
function divide(a,b,c="", r=[], f= (a,b) =>a.length<b.length?1:b.length<a.length ? 0 : a<=b ) {
  while (1) {
    let t = 0;
    while(f(b,c))c=subtract(c,b),t=t+1 
    r.push(t);
    if ( a=='') 
      break;
    else{
      c += a[0]; if (c[0]=="0") c=c.slice(1);
      a = a.slice(1)}
    }
  while (r[0]<1) r.shift``;
  return r.join``||'0';
}