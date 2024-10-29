let firtstMove = null;
let secondMove = null;
let lockBoard = false;
let move = 0;

function handleItemClick() {
  if(lockBoard) {
    return
   }
  if(this === firtstMove) {
    return
  }
  this.classList.toggle('game-item-active');
   if(!firtstMove){
     firtstMove = this 
     return
   }
   secondMove = this;
   lockBoard = true;
   move++
   gameMove.innerText = move;
   checkFor()
  
};
function checkFor() {
  const match = firtstMove.innerText === secondMove.innerText;
  if(match) {
    firtstMove.classList.add('game-match');
    secondMove.classList.add('game-match');
    
    reset()
  } else {
    setTimeout(() => {
      firtstMove.classList.remove('game-item-active');
      secondMove.classList.remove('game-item-active')
      reset()
    },1000)
  }
}
function reset() {
   [firtstMove, secondMove] = [null,null];
   lockBoard = false;
}

let data = [1, 2, 3, 4, 5, 6, 7, 8];
data = data.concat(data);
let y = data.sort(() => Math.random() - 0.5);


for (const x of data) {
  document.querySelector(".game-section").innerHTML +=`<div class="game-item">${x}</div>`;
  

}

const items = document.querySelectorAll('.game-item');

for(const item of items) {
  item.addEventListener('click', handleItemClick)
  item.addEventListener('click', timeStart)
}

let totalSeconds = 0;

let intervalId;
function updateTime() {
  totalSeconds++
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  minute.innerText = `0${minutes} : `
  second.innerText = seconds
  
}
function timeStart() {
  if(!intervalId)  {
    intervalId = setInterval(updateTime,1000);
    return intervalId;
    
  }
 
}

menu.addEventListener('click',clickMenu);
resume.addEventListener('click',closeMenu);

function clickMenu() {
  document.querySelector('.modul-contant').style.display = 'grid';
  document.querySelector('.container').style.background = '#7e7e7e'; 
}

function closeMenu() {
   document.querySelector('.modul-contant').style.display = 'none';
   document.querySelector('.container').style.background = 'inherit'; 
}

function restartGame() {
  card.classList.toggle("isFlipped");
}

function resetOpenCards() {
    const cards = document.querySelectorAll(".game-item-active");
    cards.forEach(card => card.classList.remove("game-item-active"));
    const matchcards = document.querySelectorAll(".game-match");
    matchcards.forEach( matchcards => matchcards.classList.remove("game-match"));
     move = 0;
     gameMove.innerHTML = move;
     totalSeconds = 0;
}
restartBtn.addEventListener('click',resetOpenCards);


function checkFor() {
  const match = firtstMove.innerText === secondMove.innerText;
  if (match) {
    firtstMove.classList.add('game-match');
    secondMove.classList.add('game-match');
  
    if (document.querySelectorAll('.game-match').length === data.length) {
      clearInterval(intervalId); 
    }

    reset();
  } else {
    setTimeout(() => {
      firtstMove.classList.remove('game-item-active');
      secondMove.classList.remove('game-item-active');
      reset();
    }, 1000);
  }
}
