const express = require('express');
const path = require('path');
const emojis = require('./data/emojis');
const app = express();
const PORT = 5000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let score = 0;

app.get('/emoji', (req, res) => {
    const correct = emojis[Math.floor(Math.random() * emojis.length)];
    const options = [correct.name];

    while (options.length < 4) {
        const random = emojis[Math.floor(Math.random() * emojis.length)].name;
        if (!options.includes(random)) options.push(random);
    }

    const shuffled = options.sort(() => Math.random() - 0.5);
    res.json({ emoji: correct.emoji, answer: correct.name, options: shuffled });
});

app.post('/guess', (req, res) => {
    const { guess, answer } = req.body;
    const isCorrect = guess === answer;
    if (isCorrect) score++;

    res.json({ correct: isCorrect, score });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
