const player = document.getElementById('player');
let playerX = 50; // Initial X position
let playerY = 50; // Initial Y position

player.style.left = playerX + 'px';
player.style.top = playerY + 'px';

document.addEventListener('keydown', (event) => {
  const key = event.key;

  if (key === 'ArrowUp') {
    playerY -= 10;
  } else if (key === 'ArrowDown') {
    playerY += 10;
  } else if (key === 'ArrowLeft') {
    playerX -= 10;
  } else if (key === 'ArrowRight') {
    playerX += 10;
  }

  player.style.left = playerX + 'px';
  player.style.top = playerY + 'px';
});
