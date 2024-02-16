// 注音卡
var vowels = ["images/vowels/a_e.png", "images/vowels/a.png", "images/vowels/ar.png", "images/vowels/e.png", "images/vowels/er.png", "images/vowels/i.png", "images/vowels/o.png", "images/vowels/oa.png", "images/vowels/oo.png", "images/vowels/ou.png"];
var consonants = ["images/consonants/b.png", "images/consonants/d.png", "images/consonants/f.png", "images/consonants/g.png", "images/consonants/h.png", "images/consonants/k.png", "images/consonants/l.png", "images/consonants/m.png", "images/consonants/n.png", "images/consonants/p.png", "images/consonants/r.png", "images/consonants/s.png", "images/consonants/t.png", "images/consonants/th-z.png", "images/consonants/th.png"];

var currentIndex = 0;
var shuffledCards = [];

// Fisher-Yates 洗牌算法
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// 初始化洗牌
function initializeShuffle() {
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

// 隨機顯示卡片
function showRandomCard() {
  if (currentIndex < shuffledCards.length) {
    const card = shuffledCards[currentIndex];
    document.getElementById("consonants").src = card.consonant;
    document.getElementById("vowels").src = card.vowel;

    currentIndex++;

    // 卡片計數器
    document.getElementById('counter').textContent = currentIndex;

  } else {
    alert("完成");
  }
}

// 重新開始
function restart() {
  initializeShuffle();
  showRandomCard();
}
