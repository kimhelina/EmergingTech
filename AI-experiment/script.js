const grid = document.getElementById('grid');
const timerDisplay = document.getElementById('timer');
const scoreDisplay = document.getElementById('score');
let timeLeft = 30; // Initial time in seconds
let score = 0;

function createGrid() {
    for (let i = 0; i < 16; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('click', () => {
            if (cell.classList.contains('mole')) {
                score++;
                scoreDisplay.textContent = `Score: ${score}`;
                cell.classList.remove('mole');
            }
        });
        grid.appendChild(cell);
    }
}

function showMole() {
    const cells = document.querySelectorAll('.cell');
    const randomIndex = Math.floor(Math.random() * 16);
    cells[randomIndex].classList.add('mole');
}

function startTimer() {
    const interval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Time left: ${timeLeft} seconds`;

        if (timeLeft === 0) {
            clearInterval(interval);
            endGame();
        }
    }, 1000);
}

function endGame() {
    alert(`The end! Total score: ${score}`);
}

function startGame() {
    startTimer();
    setInterval(() => {
        const moles = document.querySelectorAll('.mole');
        moles.forEach(mole => mole.classList.remove('mole'));
        showMole();
    }, 1000);
}

createGrid();
startGame();
