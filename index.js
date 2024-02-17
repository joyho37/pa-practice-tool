// 注音卡
let vowels = ["images/vowels/a_e.png", "images/vowels/a.png", "images/vowels/ar.png", "images/vowels/e.png", "images/vowels/er.png", "images/vowels/i.png", "images/vowels/o.png", "images/vowels/oa.png", "images/vowels/oo.png", "images/vowels/ou.png"];
let consonants = ["images/consonants/b.png", "images/consonants/d.png", "images/consonants/f.png", "images/consonants/g.png", "images/consonants/h.png", "images/consonants/k.png", "images/consonants/l.png", "images/consonants/m.png", "images/consonants/n.png", "images/consonants/p.png", "images/consonants/r.png", "images/consonants/s.png", "images/consonants/t.png", "images/consonants/th-z.png", "images/consonants/th.png"];

let currentIndex = 0;
let shuffledCards = [];
let startButton = document.getElementById('start');
let restartButton = document.getElementById('restart');

// Fisher-Yates 洗牌算法
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// 預載圖片函式
function preloadImages(images) {
  for (let i = 0; i < images.length; i++) {
    const img = new Image();
    img.src = images[i];
  }
}

// 初始化（預載圖片及洗牌）
function initializeShuffle() {
  startButton.style.display = 'block';
  restartButton.style.display = 'none';

  preloadImages(vowels);
  preloadImages(consonants);

  shuffledCards = [];
  shuffleArray(consonants);
  shuffleArray(vowels);

  for (let i = 0; i < consonants.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      shuffledCards.push({
        consonant: consonants[i],
        vowel: vowels[j]
      });
    }
  }

  shuffleArray(shuffledCards);

  currentIndex = 0;
}

initializeShuffle();

// 顯示牌組
function showRandomCard() {
  startButton.textContent = '下一個';

  if (currentIndex < shuffledCards.length) {
    const card = shuffledCards[currentIndex];
    document.getElementById("consonants").src = card.consonant;
    document.getElementById("vowels").src = card.vowel;

    currentIndex++;

    document.getElementById('counter').textContent = currentIndex;

  } else {

    startButton.classList.remove('btn-primary');
    startButton.classList.add('btn-success');
    startButton.textContent = '完成';

    startButton.setAttribute('data-bs-toggle', 'modal');
    startButton.setAttribute('data-bs-target', '#staticBackdrop');

  }
}

// 關閉完成提示視窗
function closeModal() {
  startButton.removeAttribute('data-bs-toggle', 'modal');
  startButton.removeAttribute('data-bs-target', '#staticBackdrop');
  startButton.classList.remove('btn-success');
  startButton.classList.add('btn-primary');
  startButton.style.display = 'none';
  restartButton.style.display = 'block';
}

// 重新開始
function restart() {
  initializeShuffle();
  showRandomCard();
}