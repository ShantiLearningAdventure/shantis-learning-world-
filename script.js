const categories = [
  { id: 'abc', icon: '🅰️', title: 'ABC Learning', blurb: 'Letters and sounds!' },
  { id: 'numbers', icon: '🔢', title: '123 Learning', blurb: 'Count and learn!' },
  { id: 'colors', icon: '🎨', title: 'Colors', blurb: 'Bright and beautiful!' },
  { id: 'shapes', icon: '🔷', title: 'Shapes', blurb: 'Round, square, and more!' },
  { id: 'matching', icon: '🧩', title: 'Matching Games', blurb: 'Find the pair!' },
  { id: 'tracing', icon: '✏️', title: 'Tracing', blurb: 'Follow the line!' },
  { id: 'mini', icon: '🎮', title: 'Mini Games', blurb: 'Play and smile!' },
  { id: 'stories', icon: '📚', title: 'Story Time', blurb: 'Read and imagine!' },
  { id: 'progress', icon: '📈', title: 'Progress', blurb: 'See how we grow!' }
];

const letterData = {
  A: { word: 'Apple', sound: 'Aaa', emoji: '🍎', fact: 'A is for Apple! Crunchy and sweet!' },
  B: { word: 'Bear', sound: 'Bbb', emoji: '🐻', fact: 'B is for Bear! A cuddly friend!' },
  C: { word: 'Cat', sound: 'Ccc', emoji: '🐱', fact: 'C is for Cat! Meow, meow!' },
  D: { word: 'Dog', sound: 'Ddd', emoji: '🐶', fact: 'D is for Dog! Wag, wag, wag!' },
  E: { word: 'Elephant', sound: 'Eee', emoji: '🐘', fact: 'E is for Elephant! Big and gentle!' },
  F: { word: 'Fish', sound: 'Fff', emoji: '🐟', fact: 'F is for Fish! Swim, swim, swim!' },
  G: { word: 'Giraffe', sound: 'Ggg', emoji: '🦒', fact: 'G is for Giraffe! Tall and sweet!' },
  H: { word: 'House', sound: 'Hhh', emoji: '🏠', fact: 'H is for House! Home, sweet home!' },
  I: { word: 'Ice Cream', sound: 'Iii', emoji: '🍦', fact: 'I is for Ice Cream! Yum-yum!' },
  J: { word: 'Jump', sound: 'Jjj', emoji: '🤸', fact: 'J is for Jump! Bounce, bounce!' },
  K: { word: 'Kite', sound: 'Kkk', emoji: '🪁', fact: 'K is for Kite! Fly high!' },
  L: { word: 'Lion', sound: 'Lll', emoji: '🦁', fact: 'L is for Lion! Roar, roar!' },
  M: { word: 'Moon', sound: 'Mmm', emoji: '🌙', fact: 'M is for Moon! Shine softly!' },
  N: { word: 'Nest', sound: 'Nnn', emoji: '🪺', fact: 'N is for Nest! Cozy and warm!' },
  O: { word: 'Orange', sound: 'Ooo', emoji: '🍊', fact: 'O is for Orange! Round and juicy!' },
  P: { word: 'Pig', sound: 'Ppp', emoji: '🐷', fact: 'P is for Pig! Oink, oink!' },
  Q: { word: 'Queen', sound: 'Qqq', emoji: '👑', fact: 'Q is for Queen! A royal friend!' },
  R: { word: 'Rainbow', sound: 'Rrr', emoji: '🌈', fact: 'R is for Rainbow! So many colors!' },
  S: { word: 'Star', sound: 'Sss', emoji: '⭐', fact: 'S is for Star! Twinkle, twinkle!' },
  T: { word: 'Tree', sound: 'Ttt', emoji: '🌳', fact: 'T is for Tree! Grow tall!' },
  U: { word: 'Umbrella', sound: 'Uuu', emoji: '☂️', fact: 'U is for Umbrella! Stay dry!' },
  V: { word: 'Violin', sound: 'Vvv', emoji: '🎻', fact: 'V is for Violin! Play a tune!' },
  W: { word: 'Water', sound: 'Www', emoji: '💧', fact: 'W is for Water! Splash and play!' },
  X: { word: 'Xylophone', sound: 'Xxx', emoji: '🎼', fact: 'X is for Xylophone! Clink, clink!' },
  Y: { word: 'Yarn', sound: 'Yyy', emoji: '🧶', fact: 'Y is for Yarn! Soft and colorful!' },
  Z: { word: 'Zebra', sound: 'Zzz', emoji: '🦓', fact: 'Z is for Zebra! Stripes and zoom!' }
};

const numberData = Array.from({ length: 20 }, (_, i) => {
  const value = i + 1;
  return {
    value,
    emoji: ['🌟', '🧸', '🍓', '🍋', '🌼', '🍉', '🐝', '🦋', '🍏', '🍊'][value % 10] || '⭐',
    fact: `Count ${value}!` 
  };
});

const colorData = [
  { name: 'Red', hex: '#ff7c7c', icon: '🍎', fact: 'Red is like a juicy apple!' },
  { name: 'Yellow', hex: '#ffd75f', icon: '🌼', fact: 'Yellow is like a sunny flower!' },
  { name: 'Blue', hex: '#6bb6ff', icon: '💧', fact: 'Blue is like the sky!' },
  { name: 'Green', hex: '#8fe39b', icon: '🌿', fact: 'Green is like fresh grass!' },
  { name: 'Purple', hex: '#b69eff', icon: '🍇', fact: 'Purple is like a grape!' },
  { name: 'Pink', hex: '#ff9bc1', icon: '🌸', fact: 'Pink is like a flower petal!' }
];

const shapeData = [
  { name: 'Circle', kind: 'circle', icon: '🔵' },
  { name: 'Square', kind: 'square', icon: '🟦' },
  { name: 'Triangle', kind: 'triangle', icon: '🔺' },
  { name: 'Rectangle', kind: 'rectangle', icon: '📐' },
  { name: 'Oval', kind: 'oval', icon: '🥚' },
  { name: 'Star', kind: 'star', icon: '⭐' }
];

const storyData = [
  { title: 'Shanti and the Rainbow', icon: '🌈', text: 'Shanti saw a rainbow after the rain. She smiled and counted the colors: red, yellow, blue, and green!' },
  { title: 'Shanti Finds Shapes', icon: '🧩', text: 'Shanti looked around her room and found circles, squares, and triangles in toys and books. She giggled and played!' },
  { title: 'Shanti’s Counting Garden', icon: '🌼', text: 'In the garden, Shanti counted flowers: one, two, three, four, five! Every flower made her happy.' }
];

const progressState = {
  abc: 3,
  numbers: 4,
  colors: 2,
  shapes: 5,
  matching: 1,
  tracing: 2,
  mini: 3,
  stories: 2
};

const homeGrid = document.getElementById('categoryGrid');
const activityTitle = document.getElementById('activityTitle');
const activityContent = document.getElementById('activityContent');
const homeScreen = document.getElementById('homeScreen');
const activityScreen = document.getElementById('activityScreen');

const renderHome = () => {
  homeGrid.innerHTML = categories.map(category => `
    <button class="category-card" data-category="${category.id}" aria-label="Open ${category.title}">
      <span class="category-icon">${category.icon}</span>
      <h3>${category.title}</h3>
      <p>${category.blurb}</p>
    </button>
  `).join('');
};

const showScreen = (screen) => {
  homeScreen.classList.toggle('active', screen === 'home');
  activityScreen.classList.toggle('active', screen === 'activity');
};

const showCategory = (id) => {
  const label = categories.find(cat => cat.id === id)?.title || 'Learning';
  activityTitle.textContent = label;
  showScreen('activity');

  if (id === 'abc') renderAbc();
  else if (id === 'numbers') renderNumbers();
  else if (id === 'colors') renderColors();
  else if (id === 'shapes') renderShapes();
  else if (id === 'matching') renderMatchingGame();
  else if (id === 'tracing') renderTracing();
  else if (id === 'mini') renderMiniGame();
  else if (id === 'stories') renderStories();
  else if (id === 'progress') renderProgress();
};

const renderAbc = () => {
  const entries = Object.entries(letterData);
  activityContent.innerHTML = `
    <div class="big-grid">
      ${entries.map(([letter, data]) => `
        <button class="mini-card" data-letter="${letter}">
          <span class="letter-big">${letter}</span>
          <span class="label">${data.word}</span>
        </button>
      `).join('')}
    </div>
    <div class="detail-panel" id="abcDetail">
      <div class="detail-art">${letterData.A.emoji}</div>
      <div class="detail-copy">
        <h3>${letterData.A.word}</h3>
        <p>${letterData.A.fact}</p>
        <span class="sound-badge">Sound: ${letterData.A.sound}</span>
      </div>
    </div>
  `;

  const detailPanel = document.getElementById('abcDetail');
  detailPanel.innerHTML = `
    <div class="detail-art">${letterData.A.emoji}</div>
    <div class="detail-copy">
      <h3>A for ${letterData.A.word}</h3>
      <p>${letterData.A.fact}</p>
      <span class="sound-badge">Sound: ${letterData.A.sound}</span>
    </div>
  `;

  activityContent.addEventListener('click', (event) => {
    const target = event.target.closest('[data-letter]');
    if (!target) return;
    const key = target.dataset.letter;
    const item = letterData[key];
    detailPanel.innerHTML = `
      <div class="detail-art">${item.emoji}</div>
      <div class="detail-copy">
        <h3>${key} for ${item.word}</h3>
        <p>${item.fact}</p>
        <span class="sound-badge">Sound: ${item.sound}</span>
      </div>
    `;
  }, { once: true });
};

const renderNumbers = () => {
  activityContent.innerHTML = `
    <div class="big-grid">
      ${numberData.map(item => `
        <button class="mini-card" data-number="${item.value}">
          <span class="letter-big">${item.value}</span>
          <span class="label">${item.emoji}</span>
        </button>
      `).join('')}
    </div>
    <div class="detail-panel" id="numberDetail">
      <div class="detail-art">1️⃣</div>
      <div class="detail-copy">
        <h3>One</h3>
        <p>Count 1 object and say, “One!”</p>
        <span class="sound-badge">Counting fun!</span>
      </div>
    </div>
  `;

  const detailPanel = document.getElementById('numberDetail');
  activityContent.addEventListener('click', (event) => {
    const target = event.target.closest('[data-number]');
    if (!target) return;
    const value = Number(target.dataset.number);
    const item = numberData[value - 1];
    detailPanel.innerHTML = `
      <div class="detail-art">${item.emoji}</div>
      <div class="detail-copy">
        <h3>${value}</h3>
        <p>${item.fact}</p>
        <span class="sound-badge">Count with me!</span>
      </div>
    `;
  }, { once: true });
};

const renderColors = () => {
  activityContent.innerHTML = `
    <div class="big-grid">
      ${colorData.map(color => `
        <button class="mini-card" data-color="${color.name}">
          <div class="color-swatch" style="background:${color.hex};">
            <span>${color.name}</span>
          </div>
        </button>
      `).join('')}
    </div>
    <div class="detail-panel" id="colorDetail">
      <div class="detail-art">🍎</div>
      <div class="detail-copy">
        <h3>Red</h3>
        <p>Red is like a juicy apple!</p>
        <span class="sound-badge">Look for red items!</span>
      </div>
    </div>
  `;

  const detailPanel = document.getElementById('colorDetail');
  activityContent.addEventListener('click', (event) => {
    const target = event.target.closest('[data-color]');
    if (!target) return;
    const name = target.dataset.color;
    const item = colorData.find(c => c.name === name);
    if (!item) return;
    detailPanel.innerHTML = `
      <div class="detail-art" style="background:${item.hex};">${item.icon}</div>
      <div class="detail-copy">
        <h3>${item.name}</h3>
        <p>${item.fact}</p>
        <span class="sound-badge">Can you find something ${item.name.toLowerCase()}?</span>
      </div>
    `;
  }, { once: true });
};

const renderShapes = () => {
  activityContent.innerHTML = `
    <div class="big-grid">
      ${shapeData.map(shape => `
        <button class="shape-card mini-card" data-shape="${shape.name}">
          <div class="shape-box ${shape.kind}"></div>
          <strong>${shape.name}</strong>
        </button>
      `).join('')}
    </div>
    <div class="detail-panel" id="shapeDetail">
      <div class="detail-art">🔵</div>
      <div class="detail-copy">
        <h3>Circle</h3>
        <p>A circle is round like a ball.</p>
        <span class="sound-badge">Round and round!</span>
      </div>
    </div>
  `;

  const detailPanel = document.getElementById('shapeDetail');
  activityContent.addEventListener('click', (event) => {
    const target = event.target.closest('[data-shape]');
    if (!target) return;
    const name = target.dataset.shape;
    const item = shapeData.find(s => s.name === name);
    if (!item) return;
    detailPanel.innerHTML = `
      <div class="detail-art">${item.icon}</div>
      <div class="detail-copy">
        <h3>${item.name}</h3>
        <p>${item.name === 'Circle' ? 'A circle is round like a ball.' : item.name === 'Square' ? 'A square has four equal sides.' : item.name === 'Triangle' ? 'A triangle has three sides.' : item.name === 'Rectangle' ? 'A rectangle has two long sides and two short sides.' : item.name === 'Oval' ? 'An oval is like a stretched circle.' : 'A star has points and shines bright!'}</p>
        <span class="sound-badge">Find one in your room!</span>
      </div>
    `;
  }, { once: true });
};

const renderMatchingGame = () => {
  const cards = [
    { id: 'a1', value: '🅰️', key: 'A' },
    { id: 'a2', value: '🅰️', key: 'A' },
    { id: 'b1', value: '🔢', key: '1' },
    { id: 'b2', value: '🔢', key: '1' },
    { id: 'c1', value: '🎨', key: 'color' },
    { id: 'c2', value: '🎨', key: 'color' },
    { id: 'd1', value: '⭐', key: 'star' },
    { id: 'd2', value: '⭐', key: 'star' }
  ];

  let selected = [];
  let matched = new Set();

  const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
  const boardCards = shuffle(cards);

  const renderBoard = () => {
    activityContent.innerHTML = `
      <div class="match-board">
        ${boardCards.map((card) => `
          <button class="match-card ${selected.includes(card.id) || matched.has(card.key) ? 'flipped' : ''} ${matched.has(card.key) ? 'matched' : ''}" data-card-id="${card.id}" data-card-key="${card.key}" data-value="${card.value}"></button>
        `).join('')}
      </div>
    `;
  };

  renderBoard();

  activityContent.addEventListener('click', (event) => {
    const target = event.target.closest('.match-card');
    if (!target || selected.includes(target.dataset.cardId) || matched.has(target.dataset.cardKey)) return;

    selected.push(target.dataset.cardId);
    target.classList.add('flipped');

    if (selected.length === 2) {
      const [firstId, secondId] = selected;
      const firstCard = boardCards.find((card) => card.id === firstId);
      const secondCard = boardCards.find((card) => card.id === secondId);

      if (firstCard?.key === secondCard?.key) {
        matched.add(firstCard.key);
        setTimeout(() => {
          const cardsOnBoard = document.querySelectorAll('.match-card');
          cardsOnBoard.forEach((card) => {
            if (card.dataset.cardKey === firstCard.key) {
              card.classList.add('matched');
            }
          });
          selected = [];
          if (matched.size === 4) {
            activityContent.insertAdjacentHTML('beforeend', '<div class="progress-summary">You did it! Great matching job, Shanti!</div>');
            progressState.matching = 5;
          }
        }, 500);
      } else {
        setTimeout(() => {
          const cardsOnBoard = document.querySelectorAll('.match-card');
          cardsOnBoard.forEach((card) => {
            if (selected.includes(card.dataset.cardId)) {
              card.classList.remove('flipped');
            }
          });
          selected = [];
        }, 700);
      }
    }
  }, { once: true });
};

const renderTracing = () => {
  activityContent.innerHTML = `
    <div class="trace-wrap">
      <div class="trace-board">
        <canvas id="traceCanvas" width="520" height="320"></canvas>
      </div>
      <div class="trace-panel">
        <div class="trace-tip">Trace the big letter A with your finger. Follow the line slowly and have fun!</div>
        <button class="trace-btn" id="resetTrace">Try Again</button>
      </div>
    </div>
  `;

  const canvas = document.getElementById('traceCanvas');
  const ctx = canvas.getContext('2d');
  const points = [
    [110, 40], [190, 260], [260, 40], [345, 260], [390, 40], [290, 40], [200, 40]
  ];
  let traced = 0;
  let pointerDown = false;

  const drawBoard = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#d9ebff';
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(110, 40);
    ctx.lineTo(190, 260);
    ctx.lineTo(260, 40);
    ctx.lineTo(345, 260);
    ctx.lineTo(390, 40);
    ctx.lineTo(290, 40);
    ctx.lineTo(200, 40);
    ctx.stroke();

    ctx.strokeStyle = '#7ab8ff';
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.moveTo(110, 40);
    points.forEach(([x, y]) => ctx.lineTo(x, y));
    ctx.stroke();
  };

  drawBoard();

  const distance = (a, b) => Math.hypot(a.x - b[0], a.y - b[1]);

  const handlePointer = (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * canvas.width;
    const y = ((event.clientY - rect.top) / rect.height) * canvas.height;
    if (!pointerDown) return;

    const target = points[traced];
    if (!target) return;
    const hit = distance({ x, y }, target) < 26;

    if (hit) {
      traced += 1;
      ctx.fillStyle = '#ff8bb3';
      ctx.beginPath();
      ctx.arc(target[0], target[1], 10, 0, Math.PI * 2);
      ctx.fill();
      if (traced >= points.length) {
        const tip = document.querySelector('.trace-tip');
        tip.textContent = 'You did it! Great tracing, Shanti!';
        progressState.tracing = 5;
      }
    }
  };

  canvas.onpointerdown = (event) => {
    pointerDown = true;
    handlePointer(event);
  };
  canvas.onpointermove = handlePointer;
  canvas.onpointerup = () => { pointerDown = false; };
  canvas.onpointerleave = () => { pointerDown = false; };

  document.getElementById('resetTrace').addEventListener('click', () => {
    traced = 0;
    pointerDown = false;
    drawBoard();
    document.querySelector('.trace-tip').textContent = 'Trace the big letter A with your finger. Follow the line slowly and have fun!';
  });
};

const renderMiniGame = () => {
  const questions = [
    { prompt: 'Which number comes after 4?', options: ['5', '7', '3'], answer: '5' },
    { prompt: 'Which color is the sky?', options: ['Red', 'Blue', 'Green'], answer: 'Blue' },
    { prompt: 'What shape is a ball?', options: ['Square', 'Circle', 'Triangle'], answer: 'Circle' }
  ];

  let index = 0;
  let answered = false;

  const renderQuestion = () => {
    const q = questions[index];
    activityContent.innerHTML = `
      <div class="main-quiz">
        <div class="question-card">
          <h3>${q.prompt}</h3>
          <div class="option-grid">
            ${q.options.map(option => `
              <button class="option-card" data-option="${option}">${option}</button>
            `).join('')}
          </div>
          <div class="feedback">${answered ? 'Keep learning!' : 'Choose the answer!'}</div>
        </div>
      </div>
    `;
  };

  renderQuestion();

  activityContent.addEventListener('click', (event) => {
    const target = event.target.closest('[data-option]');
    if (!target || answered) return;

    answered = true;
    const selected = target.dataset.option;
    const q = questions[index];
    const buttons = activityContent.querySelectorAll('.option-card');
    buttons.forEach((button) => {
      const option = button.dataset.option;
      button.classList.toggle('correct', option === q.answer);
      button.classList.toggle('wrong', option === selected && option !== q.answer);
    });

    const feedback = activityContent.querySelector('.feedback');
    if (selected === q.answer) {
      feedback.textContent = 'You did it! Great Job!';
      progressState.mini = Math.min(5, progressState.mini + 1);
    } else {
      feedback.textContent = 'Nice try! The correct answer is ' + q.answer + '. Keep learning!';
    }

    const nextButton = document.createElement('button');
    nextButton.className = 'action-btn';
    nextButton.textContent = index < questions.length - 1 ? 'Next Challenge' : 'Play Again';
    nextButton.style.marginTop = '14px';
    activityContent.appendChild(nextButton);

    nextButton.addEventListener('click', () => {
      if (index < questions.length - 1) {
        index += 1;
        answered = false;
        renderQuestion();
      } else {
        index = 0;
        answered = false;
        renderQuestion();
      }
    });
  }, { once: true });
};

const renderStories = () => {
  activityContent.innerHTML = `
    <div class="story-grid">
      ${storyData.map(story => `
        <article class="story-card">
          <div class="story-icon">${story.icon}</div>
          <h3>${story.title}</h3>
          <p>${story.text}</p>
        </article>
      `).join('')}
    </div>
  `;
};

const renderProgress = () => {
  const items = [
    ['ABC Learning', progressState.abc],
    ['123 Learning', progressState.numbers],
    ['Colors', progressState.colors],
    ['Shapes', progressState.shapes],
    ['Matching', progressState.matching],
    ['Tracing', progressState.tracing],
    ['Mini Games', progressState.mini],
    ['Story Time', progressState.stories]
  ];

  const total = items.reduce((sum, [, value]) => sum + value, 0);
  const average = Math.round((total / (items.length * 5)) * 100);

  activityContent.innerHTML = `
    <div class="progress-grid">
      ${items.map(([label, value]) => `
        <div class="progress-card">
          <div class="progress-label"><span>${label}</span><span>${value}/5</span></div>
          <div class="progress-bar"><div class="progress-fill" style="width:${(value / 5) * 100}%"></div></div>
        </div>
      `).join('')}
    </div>
    <div class="progress-summary">
      Shanti’s learning sparkle score: ${average}%! Keep learning and growing! 🌟
    </div>
  `;
};

document.getElementById('homeBtn').addEventListener('click', () => showScreen('home'));
document.getElementById('backBtn').addEventListener('click', () => showScreen('home'));

homeGrid.addEventListener('click', (event) => {
  const categoryButton = event.target.closest('.category-card');
  if (!categoryButton) return;
  const categoryId = categoryButton.dataset.category;
  showCategory(categoryId);
});

renderHome();
showScreen('home');
