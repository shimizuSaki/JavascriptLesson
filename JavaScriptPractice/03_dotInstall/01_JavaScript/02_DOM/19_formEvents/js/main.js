'use strict';
{
  document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    console.log('submit');
  })
}