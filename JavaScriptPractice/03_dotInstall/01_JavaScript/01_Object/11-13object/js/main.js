'use strict';
{
  const point = {
    x: 100,
    y: 180,
  };
  console.log(point);
  
  console.log(point.x); //100
  console.log(point['y']); //180
  
  point.z = 90;
  delete point.y;
  console.log(point);

  const keys = Object.keys(point);
  console.log(keys);
  keys.forEach(key => {
    console.log(`${key}`);
  });

  const points = [
    {x: 30, y: 20},
    {x: 10, y: 50},
    {x: 40, y: 40},
  ];
  console.log(points[1].y);

}