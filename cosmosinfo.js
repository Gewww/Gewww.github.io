
const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

function Star(x, y, width, speed) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.speed = speed;
  this.color = "#fff";
   
  this.draw = function() {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, width, width);
  }

  this.update = () => {
  if (this.x + this.width > innerWidth) {
  this.x = 0;
  }
  this.x += this.speed;

  this.draw();
  }
}

const stars = {
  nearStar : {
  width : 3,
  speed : 0.2
  },
  midStar : {
  width : 2,
  speed : 0.1
  },
  farStar : {
  width : 1,
  speed : 0.025
  }
};

let starArray = [];

function init() {

  starArray = [];

  for (let i=0; i < 50; ++i) {
  const x = Math.random() * (innerWidth - stars.nearStar.width);
  const y = Math.random() * (innerHeight - stars.nearStar.width);
  starArray.push(new Star(x, y, stars.nearStar.width, stars.nearStar.speed));
  }

  for (let i=0; i < 100; ++i) {
  const x = Math.random() * (innerWidth - stars.midStar.width);
  const y = Math.random() * (innerHeight - stars.midStar.width);
  starArray.push(new Star(x, y, stars.midStar.width, stars.midStar.speed));
  }


  for (let i=0; i < 350; ++i) {
  const x = Math.random() * (innerWidth - stars.farStar.width);
  const y = Math.random() * (innerHeight - stars.farStar.width);
  starArray.push(new Star(x, y, stars.farStar.width, stars.farStar.speed));
  }
}


function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (var star of starArray) {
  star.update();
  }
}

init();
animate();
var triggerDiv = document.getElementById('solar');
var hiddenDiv = document.getElementById('txt1');
var triggerDiv1 = document.getElementById('gallery');
var hiddenDiv1 = document.getElementById('txt2');
var triggerDiv2 = document.getElementById('info');
var hiddenDiv2 = document.getElementById('txt3');

triggerDiv.addEventListener('mouseover', function() {
  hiddenDiv.style.display = 'block';
  
});

triggerDiv.addEventListener('mouseout', function() {
  hiddenDiv.style.display = 'none'; 
});
triggerDiv1.addEventListener('mouseover', function() {
  hiddenDiv1.style.display = 'block';
  
});

triggerDiv1.addEventListener('mouseout', function() {
  hiddenDiv1.style.display = 'none'; 
});
triggerDiv2.addEventListener('mouseover', function() {
  hiddenDiv2.style.display = 'block';
  
});

triggerDiv2.addEventListener('mouseout', function() {
  hiddenDiv2.style.display = 'none'; 
});