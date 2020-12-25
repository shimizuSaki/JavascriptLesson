'use strict';
{
    document.querySelector('button').addEventListener('click', () => {
      const targetNode = document.getElementById('target');

      // targetNode.textContent = 'Dotinstall';
      targetNode.textContent = targetNode.dataset.translation;
    });
}