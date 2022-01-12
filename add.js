const add=(a,b,s=0,r='')=>{ 
  if (a=='0'&&b=='0')return '0'
  a=a.split``;b=b.split``;
  while (s||a.length||b.length) {
    s+=~~a.pop``+~~b.pop``;
    r = (s % 10) + r; s=s >= 10;
  }return r?r.replace(/^0+/,"")||"0":'0';
}