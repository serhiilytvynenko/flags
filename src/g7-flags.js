'use strict';
const flagContainer = document.getElementById('flag-container');
const leaderInput = document.getElementById('leader-input');

leaderInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    const leaderName = leaderInput.value.trim().toLowerCase();

    let flagUrl = './assets/images/european-union.png';

    switch (leaderName) {
      case 'biden':
        flagUrl = './assets/images/USA.png';
        break;
      case 'scholz':
        flagUrl = './assets/images/Germany.png';
        break;
      case 'meloni':
        flagUrl = './assets/images/Italy.png';
        break;
      case 'trudeau':
        flagUrl = './assets/images/Canada.png';
        break;
      case 'macron':
        flagUrl = './assets/images/France.png';
        break;
      case 'sunak':
        flagUrl = './assets/images/United_Kingdom.png';
        break;
      case 'kisida':
        flagUrl = './assets/images/Japan.png';
        break;
      case 'zelensky':
        flagUrl = './assets/images/Ukraine.png';
        break;
      default:
        break;
    }
    leaderInput.value = '';
    fetch(flagUrl)
      .then((response) => {
        if (response.ok) {
          return response.blob();
        }
        throw new Error('Network response was not ok.');
      })
      .then((blob) => {
        const imgUrl = URL.createObjectURL(blob);
        flagContainer.style.backgroundImage = `url(${imgUrl})`;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
});
