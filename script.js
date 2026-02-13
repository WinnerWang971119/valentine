// ===== CONFIG =====
const SECRET_KEY = '20221014';

// ===== REPLACE THESE WITH YOUR OWN PARAGRAPHS =====
const paragraphs = [
  "To: 我最可愛的寶貝爪提",
  "又到了浪漫的情人節。雖然我們現在身處不同學校，隔著距離，但只要想到心裡有妳，這就是最美好的事情。這已經是我們在一起的第四個情人節了。",
  "雖然今天不能實體抱到妳，但謝謝妳每天晚上陪著我睡覺，讓我在台北的夜晚不孤單；我也好喜歡我們一起看劇、每天寫一段話給對方的默契，那些文字雖然簡短，卻是我每天最有動力的來源。未來的我們，一定也會手牽手，走過更多更多個春夏秋冬。",
  "其實，我有好多話想跟妳說。謝謝妳出現在我的生命中，點燃了我心中的火焰，讓我真正了解什麼是浪漫。妳總是為了我著想，付出那份「用心」與「時間」，對我來說，這比世上任何昂貴的禮物都更有價值。",
  "謝謝妳，願意每天聽我抱怨、接住我的情緒。也謝謝妳一直支持我做我喜歡的工程與機器人，儘管有時候我很固執、很堅持，妳卻從未想過離開，始終溫柔地陪著我走。",
  "世上最幸福的事情，莫過於有個懂你、照顧你的人。我很開心我們已經來到「有心事都瞞不住對方」的階段了。在妳面前，我可以是堅強的男朋友，照顧妳、陪著妳；但我也可以卸下武裝，當妳的小寶貝，讓妳哄我、安慰我。",
  "妳放心，在我心裡，妳永遠是我的小公主。我會一直寵著妳，讓妳無敵幸福！不只是給妳買很多禮物，而是細心的把妳放在我的心上，讓妳感受到我滿滿的愛，和不停歇的陪伴。",
  "這段時間，妳為了我們的感情做了很多努力與改變，給了我滿滿的安全感。我能看見我們的感情比以前更加深厚和美滿。我也會繼續努力，讓我們的感情越來越好，成為彼此最堅強的後盾。",
  "想到二二八我們要一起去合歡山，我就覺得好開心、好期待！我覺得以後我們一定可以經常這樣到處去玩，創造更多屬於我們的回憶。",
  "我愛妳。不論發生什麼事情、身在何處、是什麼時刻，我會一直愛著妳，直到永恆。",
  "未來的路上，會有很多困難、紛爭、難題。但我們會抓緊彼此的手，一起面對，一起克服",
  "也會有更多的回憶、幸福。我們會把握那些瞬間，放在我們的記憶最深處。",
  "希望多年後的情人節，當我們變老了，回頭望向這一天，可以抱在一起說：「哈哈，當年的我們好可愛，真的好幸福。」",
  "我愛妳，謝謝妳。未來的每個節日，我們都要在對方身邊喔！",
  "By: 愛妳的小程程"
];

// ===== STATE =====
let currentParagraph = 0;

// ===== PETALS =====
function createPetals() {
  const container = document.getElementById('petals');
  const colors = ['var(--petal-1)','var(--petal-2)','var(--petal-3)','var(--petal-4)','var(--petal-5)'];

  for (let i = 0; i < 20; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.style.setProperty('--size', (8 + Math.random() * 14) + 'px');
    petal.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);
    petal.style.setProperty('--duration', (8 + Math.random() * 10) + 's');
    petal.style.setProperty('--delay', (Math.random() * 12) + 's');
    petal.style.setProperty('--drift', (Math.random() * 200 - 100) + 'px');
    petal.style.setProperty('--rotation', (Math.random() * 720 - 360) + 'deg');
    petal.style.setProperty('--opacity', (0.25 + Math.random() * 0.4));
    petal.style.left = (Math.random() * 100) + '%';
    container.appendChild(petal);
  }
}

// ===== SCREEN TRANSITION =====
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  setTimeout(() => {
    document.getElementById(id).classList.add('active');
  }, 50);
}

// ===== LOGIN =====
function tryLogin() {
  const input = document.getElementById('login-input').value.trim();
  const card = document.getElementById('login-card');
  const error = document.getElementById('login-error');

  if (input === SECRET_KEY) {
    card.style.transform = 'scale(0.95)';
    card.style.opacity = '0';
    setTimeout(() => {
      showScreen('flower-screen');
      startFlowerReveal();
    }, 600);
  } else {
    error.classList.add('visible');
    card.classList.add('shake');
    setTimeout(() => card.classList.remove('shake'), 500);
    setTimeout(() => error.classList.remove('visible'), 3000);
  }
}

// Enter key support
document.getElementById('login-input').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') tryLogin();
});

// ===== FLOWER REVEAL =====
function createRose(container, x, y, size, delay) {
  const wrapper = document.createElement('div');
  wrapper.className = 'rose-wrapper';
  wrapper.style.cssText = `left:${x}%;top:${y}%;transform:translate(-50%,-50%) scale(0);`;
  wrapper.style.setProperty('--rose-size', size + 'px');

  const rose = document.createElement('div');
  rose.className = 'rose';

  const petalColors = ['#ffc2d1','#ffb3c6','#ff8fab','#fb6f92','#e8a0b4'];
  const petalCount = 8;

  for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement('div');
    petal.className = 'rose-petal';
    const angle = (360 / petalCount) * i;
    const pSize = size * (0.45 + Math.random() * 0.15);
    petal.style.cssText = `
      width:${pSize}px; height:${pSize}px;
      background: ${petalColors[i % petalColors.length]};
      top: 50%; left: 50%;
      margin-top: ${-pSize/2}px; margin-left: ${-pSize/2}px;
      --rot: ${angle}deg;
      --petal-delay: ${delay + i * 0.06}s;
      box-shadow: inset -2px -2px 6px rgba(199,75,122,0.15);
    `;
    rose.appendChild(petal);
  }

  const center = document.createElement('div');
  center.className = 'rose-center';
  center.style.animationDelay = (delay + 0.5) + 's';
  rose.appendChild(center);

  wrapper.appendChild(rose);
  container.appendChild(wrapper);

  setTimeout(() => {
    wrapper.style.transform = 'translate(-50%,-50%) scale(1)';
  }, delay * 1000);

  return wrapper;
}

function startFlowerReveal() {
  const stage = document.getElementById('flower-stage');

  // Create roses in a circular pattern
  const roses = [
    { x: 50, y: 50, size: 55, delay: 0.2 },
    { x: 30, y: 35, size: 40, delay: 0.5 },
    { x: 70, y: 35, size: 42, delay: 0.6 },
    { x: 25, y: 60, size: 38, delay: 0.8 },
    { x: 75, y: 60, size: 40, delay: 0.9 },
    { x: 50, y: 25, size: 35, delay: 0.7 },
    { x: 50, y: 75, size: 36, delay: 1.0 },
    { x: 15, y: 45, size: 30, delay: 1.1 },
    { x: 85, y: 45, size: 32, delay: 1.2 },
  ];

  const roseElements = roses.map(r => createRose(stage, r.x, r.y, r.size, r.delay));

  // After bloom, move roses to sides
  setTimeout(() => {
    roseElements.forEach((el, i) => {
      const goLeft = i % 2 === 0;
      const yOffset = 10 + (i * 10) % 80;
      el.style.opacity = '0.6';
      el.style.left = goLeft ? '-5%' : '105%';
      el.style.top = yOffset + '%';
      el.style.transform = `translate(-50%,-50%) scale(${0.5 + Math.random() * 0.3})`;
    });

    // Show text
    setTimeout(() => {
      document.getElementById('flower-text').classList.add('visible');
    }, 800);

    // Move to letter screen
    setTimeout(() => {
      showScreen('letter-screen');
      startLetter();
    }, 3500);
  }, 2800);
}

// ===== LETTER =====
function startLetter() {
  document.getElementById('vine-left').classList.add('visible');
  document.getElementById('vine-right').classList.add('visible');
  showParagraph(0);
}

function showParagraph(index) {
  const counter = document.getElementById('letter-counter');
  const divider = document.getElementById('letter-divider');
  const para = document.getElementById('letter-paragraph');
  const btn = document.getElementById('next-btn');

  // Fade out current
  counter.classList.remove('visible');
  divider.classList.remove('visible');
  para.classList.remove('visible');
  btn.classList.remove('visible');

  setTimeout(() => {
    counter.textContent = `${index + 1} / ${paragraphs.length}`;
    para.textContent = paragraphs[index];
    btn.textContent = index < paragraphs.length - 1 ? 'Continue' : 'I have a question...';

    // Re-add arrow SVG
    const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.setAttribute('viewBox','0 0 24 24');
    svg.setAttribute('fill','none');
    svg.setAttribute('stroke','currentColor');
    svg.setAttribute('stroke-width','2');
    const path = document.createElementNS('http://www.w3.org/2000/svg','path');
    path.setAttribute('d', index < paragraphs.length - 1 ? 'M5 12h14M12 5l7 7-7 7' : 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z');
    if (index >= paragraphs.length - 1) {
      svg.setAttribute('fill','currentColor');
      svg.setAttribute('stroke','none');
    }
    svg.appendChild(path);
    btn.appendChild(svg);

    // Fade in
    requestAnimationFrame(() => {
      counter.classList.add('visible');
      divider.classList.add('visible');
      para.classList.add('visible');
      btn.classList.add('visible');
    });
  }, 400);
}

function nextParagraph() {
  currentParagraph++;
  if (currentParagraph < paragraphs.length) {
    showParagraph(currentParagraph);
  } else {
    // Go to question
    showScreen('question-screen');
    startQuestion();
  }
}

// ===== VALENTINE QUESTION =====
function startQuestion() {
  setTimeout(() => {
    document.getElementById('question-heart').classList.add('visible');
    document.getElementById('question-text').classList.add('visible');
    document.getElementById('question-buttons').classList.add('visible');
  }, 300);
}

function sayNo() {
  const msg = document.getElementById('please-dont');
  msg.classList.add('visible');

  // Make No button shrink a bit
  const noBtn = document.getElementById('btn-no');
  const currentSize = parseFloat(getComputedStyle(noBtn).fontSize);
  noBtn.style.fontSize = Math.max(currentSize - 2, 8) + 'px';
  noBtn.style.padding = `${Math.max(parseInt(getComputedStyle(noBtn).paddingTop) - 2, 6)}px ${Math.max(parseInt(getComputedStyle(noBtn).paddingLeft) - 4, 12)}px`;
  noBtn.style.opacity = Math.max(parseFloat(getComputedStyle(noBtn).opacity) - 0.15, 0.3);

  setTimeout(() => msg.classList.remove('visible'), 2000);
}

function sayYes() {
  showScreen('celebration-screen');
  startCelebration();
}

// ===== CELEBRATION =====
function startCelebration() {
  const canvas = document.getElementById('hearts-canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const hearts = [];
  const colors = ['#fb6f92','#ff8fab','#ffb3c6','#ffc2d1','#c74b7a','#e8a0b4','#b76e79'];

  // Spawn many hearts
  for (let i = 0; i < 100; i++) {
    hearts.push({
      x: Math.random() * canvas.width,
      y: canvas.height + Math.random() * 200,
      size: 8 + Math.random() * 28,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedY: -(2 + Math.random() * 4),
      speedX: (Math.random() - 0.5) * 2,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.08,
      opacity: 0.6 + Math.random() * 0.4,
      delay: Math.random() * 2000,
      born: Date.now()
    });
  }

  function drawHeart(ctx, x, y, size, rotation) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.beginPath();
    const s = size / 15;
    ctx.moveTo(0, -s * 3);
    ctx.bezierCurveTo(-s * 7.5, -s * 12, -s * 15, -s * 1.5, 0, s * 6);
    ctx.bezierCurveTo(s * 15, -s * 1.5, s * 7.5, -s * 12, 0, -s * 3);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  let startTime = Date.now();
  let fadeOutStart = null;

  function animate() {
    const now = Date.now();
    const elapsed = now - startTime;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let allDone = true;

    hearts.forEach(h => {
      if (now - h.born < h.delay) { allDone = false; return; }

      h.y += h.speedY;
      h.x += h.speedX;
      h.rotation += h.rotSpeed;
      h.speedY *= 0.995;

      let alpha = h.opacity;

      // Start fading after 4 seconds
      if (elapsed > 4000) {
        if (!fadeOutStart) fadeOutStart = now;
        const fadeElapsed = now - fadeOutStart;
        alpha = h.opacity * Math.max(0, 1 - fadeElapsed / 2000);
      }

      if (alpha > 0.01) {
        allDone = false;
        ctx.globalAlpha = alpha;
        ctx.fillStyle = h.color;
        drawHeart(ctx, h.x, h.y, h.size, h.rotation);
      }
    });

    ctx.globalAlpha = 1;

    if (elapsed > 6000) {
      // Show final message
      document.getElementById('final-message').classList.add('visible');
    }

    if (!allDone || elapsed < 7000) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

// ===== INIT =====
createPetals();
