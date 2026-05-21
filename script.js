const vocabulary = [
    {
        word: 'innovate',
        definition: '創新；改革',
        partOfSpeech: '動詞',
        example: 'Companies must innovate to stay competitive in a fast-changing market.',
        root: 'in- (進入) + nov- (新) + -ate (動詞後綴)' 
    },
    {
        word: 'concept',
        definition: '概念；觀念',
        partOfSpeech: '名詞',
        example: 'The concept of sustainability has become central in modern design.',
        root: 'con- (一起) + cept- (拿，握) => 拿在一起的想法' 
    },
    {
        word: 'remarkable',
        definition: '顯著的；非凡的',
        partOfSpeech: '形容詞',
        example: 'Her progress over the last year has been truly remarkable.',
        root: 're- (再次) + mark (標記) + -able (能夠)' 
    },
    {
        word: 'adapt',
        definition: '適應；改編',
        partOfSpeech: '動詞',
        example: 'Animals must adapt to survive in different environments.',
        root: 'ad- (朝向) + apt- (適合)' 
    }
];

const card = document.getElementById('vocab-card');
const wordElement = document.getElementById('word');
const definitionElement = document.getElementById('definition');
const partOfSpeechElement = document.getElementById('part-of-speech');
const exampleElement = document.getElementById('example');
const rootElement = document.getElementById('root');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;

function renderCard(index) {
    const item = vocabulary[index];
    wordElement.textContent = item.word;
    definitionElement.textContent = item.definition;
    partOfSpeechElement.textContent = item.partOfSpeech;
    exampleElement.textContent = item.example;
    rootElement.textContent = item.root;
    card.classList.remove('is-flipped');
}

function showNextCard() {
    currentIndex = (currentIndex + 1) % vocabulary.length;
    renderCard(currentIndex);
}

function showPreviousCard() {
    currentIndex = (currentIndex - 1 + vocabulary.length) % vocabulary.length;
    renderCard(currentIndex);
}

card.addEventListener('click', function() {
    card.classList.toggle('is-flipped');
});

nextBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    showNextCard();
});

prevBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    showPreviousCard();
});

renderCard(currentIndex);