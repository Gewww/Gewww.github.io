// MINI GAME
document.addEventListener('DOMContentLoaded', () => {
  const asteroidsContainer = document.getElementById('asteroids-container');
  let score, timeLeft, asteroidInterval, timerInterval;
  
  function startGame() {
    while (asteroidsContainer.firstChild) {
      asteroidsContainer.removeChild(asteroidsContainer.firstChild);
    }
    score = timeLeft = 0;
    updateScore();
    updateTimer();
    asteroidInterval = setInterval(addAsteroid, 500);
    timerInterval = setInterval(updateTimer, 1000);
    setTimeout(() => {
      clearInterval(asteroidInterval);
      clearInterval(timerInterval);
      alert(score >= 150 ? `You win! Your score is ${score}` : `You lose! Your score is ${score}`);
    }, 20000);
  }
  
  function addAsteroid() {
    const asteroid = document.createElement('div');
    asteroid.classList.add('asteroid', 'rotating');
    asteroid.style.left = `${Math.random() * 80 + 10}%`;
    asteroid.style.top = `${Math.random() * 80 + 10}%`;
    asteroid.addEventListener('click', () => {
      asteroidsContainer.removeChild(asteroid);
      score += 10;
      updateScore();
    });
    asteroidsContainer.appendChild(asteroid);
  }
  
  function updateScore() {
    document.getElementById('score').textContent = `Score: ${score}`;
  }
  
  function updateTimer() {
    document.getElementById('timer').textContent = `Time left: ${20 - ++timeLeft}s`;
  }
  
  document.getElementById('start').addEventListener('click', startGame);
  
  function moveAsteroids() {
    document.querySelectorAll('.asteroid').forEach((asteroid) => {
      asteroid.style.top = `${parseInt(asteroid.style.top) + 5}px`;
    });
  }
  
  setInterval(moveAsteroids, 50);
});


// PLANET ANIMATION
$(function() {
  const planets = [
    { id: 'sunan', src: 'olnce.jpeg' },
    { id: 'meran', src: 'mercury.jpg' },
    { id: 'venusan', src: 'venus.jpg' },
    { id: 'earan', src: 'earth.jpg' },
    { id: 'maran', src: 'mars.jpg' },
    { id: 'jupan', src: 'jupiter.jpg' },
    { id:'satan', src: 'saturn.jpg' },
    { id:'half-planet', src: 'saturn.jpg' },
    { id:'uranan', src: 'uranus.jpg'},
    { id:'neptunan', src: 'neptune.jpg'},
  ];
  
  function drawPlanet(planet) {
    const canvas = document.getElementById(planet.id);
    const context = canvas.getContext('2d');
    const image = new Image();
    image.src = planet.src;
    const width = canvas.width;
    const height = canvas.height;
    let newMoveWidth = 0;
    let newMoveHeight = 0;
    setInterval(() => {
      context.clearRect(0, 0, width, height);
      context.drawImage(image, newMoveWidth, newMoveHeight, width, height, 0, 0, width, height);
      if (newMoveWidth >= 250) {
        newMoveWidth = 0;
      } else {
        newMoveWidth += 0.5;
      }
    }, 20);
  }
  
  planets.forEach(drawPlanet);
});


// HOVER AND SCROLL
function fhover(guyn){
  guyn.style.backgroundColor="#3e3e3e"
}
function fhover1(korel){
  korel.style.backgroundColor="#122539"
}
window.addEventListener('scroll', function() {
    var home = document.getElementById("home")
    var sun = document.getElementById("s")
    var mercury = document.getElementById("mer")
    var venus = document.getElementById("ven")
    var earth = document.getElementById("ear")
    var mars = document.getElementById("mar")
    var jupiter = document.getElementById("jupi")
    var saturn = document.getElementById("satu")
    var uran = document.getElementById("ur")
    var neptune = document.getElementById("nep")
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop <= 650){
      home.style.backgroundColor = "#3e3e3e"
      home.style.transition = "1s"
      sun.style.backgroundColor = "#122539"
      mercury.style.backgroundColor = "#122539"
    }
    else if( scrollTop<=1300){
      home.style.backgroundColor = "#122539"
      sun.style.backgroundColor = "#3e3e3e"
      mercury.style.backgroundColor = "#122539"
      sun.style.transition = "1s"
    }
    else if( scrollTop<=1950){
      venus.style.backgroundColor = "#122539"
      sun.style.backgroundColor = "#122539"
      mercury.style.backgroundColor = "#3e3e3e"
      mercury.style.transition = "1s"
    }else if( scrollTop<=2600){
      mercury.style.backgroundColor = "#122539"
      venus.style.backgroundColor = "#3e3e3e"
      earth.style.backgroundColor = "#122539"
      venus.style.transition = "1s"
    }
    else if( scrollTop<=3250){
      venus.style.backgroundColor = "#122539"
      mars.style.backgroundColor = "#122539"
      earth.style.backgroundColor = "#3e3e3e"
      earth.style.transition = "1s"
    }else if( scrollTop<=3900){
      earth.style.backgroundColor = "#122539"
      mars.style.backgroundColor = "#3e3e3e"
      jupiter.style.backgroundColor = "#122539"
      mars.style.transition = "1s"
    }else if( scrollTop<=4600){
      mars.style.backgroundColor = "#122539"
      jupiter.style.backgroundColor = "#3e3e3e"
      jupiter.style.transition = "1s"
      saturn.style.backgroundColor = "#122539"
    }else if( scrollTop<=5700){
      jupiter.style.backgroundColor = "#122539"
      saturn.style.backgroundColor = "#3e3e3e"
      saturn.style.transition = "1s"
      uran.style.backgroundColor = "#122539"
    }else if( scrollTop<=5900){
      saturn.style.backgroundColor = "#122539"
      uran.style.backgroundColor = "#3e3e3e"
      uran.style.transition = "1s"
      neptune.style.backgroundColor = "#122539"
    }else if( scrollTop<=7100){
      uran.style.backgroundColor = "#122539"
      neptune.style.backgroundColor = "#3e3e3e"
      neptune.style.transition = "1s"
    }
})