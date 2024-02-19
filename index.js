// 注音卡
let vowels = ["images/vowels/a_e.png", "images/vowels/a.png", "images/vowels/ar.png", "images/vowels/e.png", "images/vowels/er.png", "images/vowels/i.png", "images/vowels/o.png", "images/vowels/oa.png", "images/vowels/oo.png", "images/vowels/ou.png"];
let consonants = ["images/consonants/b.png", "images/consonants/d.png", "images/consonants/f.png", "images/consonants/g.png", "images/consonants/h.png", "images/consonants/k.png", "images/consonants/l.png", "images/consonants/m.png", "images/consonants/n.png", "images/consonants/p.png", "images/consonants/r.png", "images/consonants/s.png", "images/consonants/t.png", "images/consonants/th-z.png", "images/consonants/th.png"];

let currentIndex = 0;
let shuffledCards = [];
let consonantImg = document.getElementById("consonant");
let vowelImg = document.getElementById("vowel");
let startButton = document.getElementById('start');
let counter = document.getElementById('counter');
let suah = document.getElementById('suah'); // ‧ㄙㄨㄚ
let keySpaceHint = document.getElementById('keySpaceHint');

// 空白鍵監聽器
function handleKeyPress(event) {
  if (currentIndex != 0 && currentIndex <= shuffledCards.length) {
    if (event.code === "Space") {
      // 防止預設的空白鍵行為（例如捲動頁面）
      event.preventDefault();

      startButton.click();
    }
  }
}

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
  // 清牌
  consonantImg.src = "";
  vowelImg.src = "";

  suah.style.display = 'none';
  counter.style.display = 'block';

  startButton.removeAttribute('data-bs-toggle', 'modal');
  startButton.removeAttribute('data-bs-target', '#staticBackdrop');

  startButton.classList.remove('btn-success');
  startButton.classList.add('btn-primary');
  startButton.textContent = '點我開始';
  keySpaceHint.style.display = 'none';
  // 啟用空白鍵監聽
  document.addEventListener('keydown', handleKeyPress);

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
  counter.textContent = currentIndex;

}

initializeShuffle();

// 顯示牌組
function showRandomCard() {
  startButton.textContent = '下一個';
  keySpaceHint.style.display = 'block';

  if (currentIndex < shuffledCards.length) {
    const card = shuffledCards[currentIndex];
    consonantImg.src = card.consonant;
    vowelImg.src = card.vowel;

    currentIndex++;
    counter.textContent = currentIndex;

  } else {

    keySpaceHint.style.display = 'none';
    suah.style.display = 'block';
    counter.style.display = 'none';

    startButton.classList.remove('btn-primary');
    startButton.classList.add('btn-success');
    startButton.textContent = '點我完成';

    startButton.setAttribute('data-bs-toggle', 'modal');
    startButton.setAttribute('data-bs-target', '#staticBackdrop');

    // 彈出完成視窗時移除空白鍵監聽
    if (startButton.hasAttribute('data-bs-target')) {
      document.removeEventListener('keydown', handleKeyPress);
    }
  }
}


// 重新開始
function restart() {
  initializeShuffle();
}
