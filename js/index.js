// 音素符號卡
let consonants = ["images/consonants/1.png", "images/consonants/2.png", "images/consonants/3.png", "images/consonants/4.png", "images/consonants/12.png", "images/consonants/14.png", "images/consonants/15.png", "images/consonants/19.png", "images/consonants/21.png", "images/consonants/22.png", "images/consonants/23.png", "images/consonants/38.png", "images/consonants/40.png", "images/consonants/41.png", "images/consonants/3560.png"];
let vowels = ["images/vowels/45.png", "images/vowels/46.png", "images/vowels/47.png", "images/vowels/48.png", "images/vowels/49.png", "images/vowels/50.png", "images/vowels/62.png", "images/vowels/63.png", "images/vowels/64.png", "images/vowels/4647.png"];

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

// 顯示音素組合
function showRandomCard() {
  startButton.textContent = '下一個';
  keySpaceHint.style.display = 'block';

  if (currentIndex < shuffledCards.length) {
    const card = shuffledCards[currentIndex];
    consonantImg.src = card.consonant;
    vowelImg.src = card.vowel;

    // 調整子音ㄖㄨ的卡片大小
    if (card.consonant === "images/consonants/3560.png") {
      consonantImg.parentElement.style.height = '11.75rem';
      if (window.innerWidth <= 576) {
        consonantImg.parentElement.style.height = '9.75rem';
      }
      consonantImg.parentElement.style.backgroundImage = 'unset';
    } else {
      consonantImg.parentElement.style.height = '';
      consonantImg.parentElement.style.backgroundImage = '';
    }
    // 調整母音ㄚㄦ的卡片大小
    if (card.vowel === "images/vowels/4647.png") {
      vowelImg.parentElement.style.height = '11.75rem';
      if (window.innerWidth <= 576) {
        vowelImg.parentElement.style.height = '9.75rem';
      }
      vowelImg.parentElement.style.backgroundImage = 'unset';
    } else {
      vowelImg.parentElement.style.height = '';
      vowelImg.parentElement.style.backgroundImage = '';
    }

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

// 當Modal關閉時停止影片播放
var modal = document.getElementById('staticBackdrop');
modal.addEventListener('hidden.bs.modal', function () {
  var iframe = document.getElementById('youtubeIframe');
  var iframeSrc = iframe.src;
  iframe.src = iframeSrc; // 重新設置iframe的src，以停止影片播放
});

// 重新開始
function restart() {
  initializeShuffle();
}