'use strict';
{
  const d = [2019, 11, 14];
  console.log(d.join('/'));
  
  const t = '17:08:24';
  console.log(t.split(':'));
  const [h, m, s] = t.split(':');
  console.log(h);
  console.log(m);
  console.log(s);
}