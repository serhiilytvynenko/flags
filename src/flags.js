'use strict';
const flagContainer = document.getElementById('flag-container');
const leaderInput = document.getElementById('leader-input');

leaderInput.addEventListener('keyup', function(event) {
  if(event.key === 'Enter') {
  const leaderName = leaderInput.value.trim().toLowerCase();
  let flagImage = '';

  switch (leaderName) {
    case 'biden':
      flagImage = './assets/images/USA.png';
      break;
    case 'scholz':
      flagImage = './assets/images/Germany.png';
      break;
    case 'meloni':
      flagImage = './assets/images/Italy.png';
      break;
    case 'trudeau':
      flagImage = './assets/images/Canada.png';
      break;
    case 'macron':
      flagImage = './assets/images/France.png';
      break;
    case 'sunak':
      flagImage = './assets/images/United_Kingdom.png';
      break;
    case 'kisida':
      flagImage = './assets/images/Japan.png';
      break;
    case 'zelensky':
      flagImage = './assets/images/Ukraine.png';
      break;
    default:
      flagImage = './assets/images/european-union.png';
  }

  flagContainer.style.backgroundImage = `url('${flagImage}')`;
  }
});
