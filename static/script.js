function pressButton(value) {
    fetch('/button-press', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ value: value })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('display').value = data.display;
    })
    .catch(error => console.error('Error:', error));
}

const themeToggle = document.getElementById('theme-toggle');
let isDarkMode = true;

function toggleTheme() {
    isDarkMode = !isDarkMode;
    const calculator = document.querySelector('.calculator');
    
    if (isDarkMode) {
        calculator.classList.remove('light-theme');
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    } else {
        calculator.classList.add('light-theme');
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    }
}

themeToggle.addEventListener('click', toggleTheme);

window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        isDarkMode = true;
        toggleTheme();
    }
});

document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (key >= '0' && key <= '9') {
        pressButton(key);
    } else if (key === '.') {
        pressButton('.');
    } else if (key === '+' || key === '-') {
        pressButton(key);
    } else if (key === '*') {
        pressButton('×');
    } else if (key === '/') {
        event.preventDefault();
        pressButton('÷');
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        pressButton('=');
    } else if (key === 'Backspace') {
        pressButton('⌫');
    } else if (key.toLowerCase() === 'c') {
        pressButton('C');
    }
});
