// 音素符號卡
let vowels = ["images/280/vowels/45.png", "images/280/vowels/46.png", "images/280/vowels/47.png", "images/280/vowels/48.png", "images/280/vowels/49.png", "images/280/vowels/50.png", "images/280/vowels/62.png", "images/280/vowels/63.png", "images/280/vowels/64.png", "images/280/vowels/4647.png"];
let consonants = ["images/280/consonants/dr-3260.png", "images/280/consonants/tr-3360.png", "images/280/consonants/br-13560.png", "images/280/consonants/pr-23560.png"];

let currentIndex = 0;
let shuffledCards = [];
let consonantImg = document.getElementById("consonant");
let vowelImg = document.getElementById("vowel");
let startButton = document.getElementById('start');
let counter = document.getElementById('counter');
let suah = document.getElementById('suah'); // ‧ㄙㄨㄚ
let keySpaceHint = document.getElementById('keySpaceHint');
let audioPlayer = document.getElementById('audioPlayer');

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

    audioPlayer.style.display = 'none';
    suah.style.display = 'none';
    counter.style.display = 'block';

    startButton.removeAttribute('data-bs-toggle', 'modal');
    startButton.removeAttribute('data-bs-target', '#staticBackdrop');

    startButton.classList.remove('btn-success');
    startButton.classList.add('btn-danger');
    startButton.textContent = '點我開始';
    keySpaceHint.style.display = 'none';
    // 啟用空白鍵監聽
    document.addEventListener('keydown', handleKeyPress);

    // preloadImages(vowels);
    // preloadImages(consonants);

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

        // 檢查特定組合並顯示相應的音頻
        if (card.consonant === "images/280/consonants/dr-3260.png" && card.vowel === "images/280/vowels/45.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c3260v45.mp3";
        } else if (card.consonant === "images/280/consonants/dr-3260.png" && card.vowel === "images/280/vowels/48.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c3260v48.mp3";
        } else if (card.consonant === "images/280/consonants/dr-3260.png" && card.vowel === "images/280/vowels/49.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c3260v49.mp3";
        } else if (card.consonant === "images/280/consonants/dr-3260.png" && card.vowel === "images/280/vowels/50.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c3260v50.mp3";
        } else if (card.consonant === "images/280/consonants/dr-3260.png" && card.vowel === "images/280/vowels/62.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c3260v62.mp3";
        } else if (card.consonant === "images/280/consonants/dr-3260.png" && card.vowel === "images/280/vowels/63.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c3260v63.mp3";
        } else if (card.consonant === "images/280/consonants/dr-3260.png" && card.vowel === "images/280/vowels/64.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c3260v64.mp3";
        } else if (card.consonant === "images/280/consonants/dr-3260.png" && card.vowel === "images/280/vowels/46.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c3260v46.mp3";
        } else if (card.consonant === "images/280/consonants/dr-3260.png" && card.vowel === "images/280/vowels/47.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c3260v47.mp3";
        } else if (card.consonant === "images/280/consonants/dr-3260.png" && card.vowel === "images/280/vowels/4647.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c3260v4647.mp3";
        } else if (card.consonant === "images/280/consonants/tr-3360.png" && card.vowel === "images/280/vowels/45.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c3360v45.mp3";
        } else if (card.consonant === "images/280/consonants/tr-3360.png" && card.vowel === "images/280/vowels/48.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c3360v48.mp3";
        } else if (card.consonant === "images/280/consonants/tr-3360.png" && card.vowel === "images/280/vowels/49.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c3360v49.mp3";
        } else if (card.consonant === "images/280/consonants/tr-3360.png" && card.vowel === "images/280/vowels/50.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c3360v50.mp3";
        } else if (card.consonant === "images/280/consonants/tr-3360.png" && card.vowel === "images/280/vowels/62.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c3360v62.mp3";
        } else if (card.consonant === "images/280/consonants/tr-3360.png" && card.vowel === "images/280/vowels/63.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c3360v63.mp3";
        } else if (card.consonant === "images/280/consonants/tr-3360.png" && card.vowel === "images/280/vowels/64.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c3360v64.mp3";
        } else if (card.consonant === "images/280/consonants/tr-3360.png" && card.vowel === "images/280/vowels/46.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c3360v46.mp3";
        } else if (card.consonant === "images/280/consonants/tr-3360.png" && card.vowel === "images/280/vowels/47.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c3360v47.mp3";
        } else if (card.consonant === "images/280/consonants/tr-3360.png" && card.vowel === "images/280/vowels/4647.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c3360v4647.mp3";
        } else if (card.consonant === "images/280/consonants/br-13560.png" && card.vowel === "images/280/vowels/45.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c13560v45.mp3";
        } else if (card.consonant === "images/280/consonants/br-13560.png" && card.vowel === "images/280/vowels/48.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c13560v48.mp3";
        } else if (card.consonant === "images/280/consonants/br-13560.png" && card.vowel === "images/280/vowels/49.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c13560v49.mp3";
        } else if (card.consonant === "images/280/consonants/br-13560.png" && card.vowel === "images/280/vowels/50.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c13560v50.mp3";
        } else if (card.consonant === "images/280/consonants/br-13560.png" && card.vowel === "images/280/vowels/62.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c13560v62.mp3";
        } else if (card.consonant === "images/280/consonants/br-13560.png" && card.vowel === "images/280/vowels/63.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c13560v63.mp3";
        } else if (card.consonant === "images/280/consonants/br-13560.png" && card.vowel === "images/280/vowels/64.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c13560v64.mp3";
        } else if (card.consonant === "images/280/consonants/br-13560.png" && card.vowel === "images/280/vowels/46.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c13560v46.mp3";
        } else if (card.consonant === "images/280/consonants/br-13560.png" && card.vowel === "images/280/vowels/47.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c13560v47.mp3";
        } else if (card.consonant === "images/280/consonants/br-13560.png" && card.vowel === "images/280/vowels/4647.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c13560v4647.mp3";
        } else if (card.consonant === "images/280/consonants/pr-23560.png" && card.vowel === "images/280/vowels/45.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c23560v45.mp3";
        } else if (card.consonant === "images/280/consonants/pr-23560.png" && card.vowel === "images/280/vowels/48.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c23560v48.mp3";
        } else if (card.consonant === "images/280/consonants/pr-23560.png" && card.vowel === "images/280/vowels/49.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c23560v49.mp3";
        } else if (card.consonant === "images/280/consonants/pr-23560.png" && card.vowel === "images/280/vowels/50.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c23560v50.mp3";
        } else if (card.consonant === "images/280/consonants/pr-23560.png" && card.vowel === "images/280/vowels/62.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c23560v62.mp3";
        } else if (card.consonant === "images/280/consonants/pr-23560.png" && card.vowel === "images/280/vowels/63.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c23560v63.mp3";
        } else if (card.consonant === "images/280/consonants/pr-23560.png" && card.vowel === "images/280/vowels/64.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c23560v64.mp3";
        } else if (card.consonant === "images/280/consonants/pr-23560.png" && card.vowel === "images/280/vowels/46.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c23560v46.mp3";
        } else if (card.consonant === "images/280/consonants/pr-23560.png" && card.vowel === "images/280/vowels/47.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c23560v47.mp3";
        } else if (card.consonant === "images/280/consonants/pr-23560.png" && card.vowel === "images/280/vowels/4647.png") {
            audioPlayer.style.display = 'block';
            audioPlayer.src = "audios/280/c23560v4647.mp3";
        }

        currentIndex++;
        counter.textContent = currentIndex;

    } else {

        keySpaceHint.style.display = 'none';
        suah.style.display = 'block';
        counter.style.display = 'none';

        startButton.classList.remove('btn-danger');
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
var modals = document.querySelectorAll('.modal');
modals.forEach(function (modal) {
    modal.addEventListener('hidden.bs.modal', function () {
        var iframe = modal.querySelector('#youtubeIframe');
        var iframeSrc = iframe.src;
        iframe.src = iframeSrc; // 重新設置iframe的src，以停止影片播放
    });
});

// 重新開始
function restart() {
    initializeShuffle();
}