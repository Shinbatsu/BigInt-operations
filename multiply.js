function multiply(a, b){
  a=a.replace(/^0+/,"")||"0",b=b.replace(/^0+/,"")||"0"
  if(a=="0"||b=="0") return "0"
  let r=new Uint32Array(a.length+b.length+1)
  for(let i=a.length-1,k=r.length-1;i>=0;i--,k--)
    for(let j=b.length-1,k1=k;j>=0;j--,k1--)
      p=a[i]*b[j]+r[k1],r[k1]=p%10,r[k1-1]+=p/10|0
  return r.join``.replace(/^0+/,"")||"0"
}