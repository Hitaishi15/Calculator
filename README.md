## Web Calculator

A modern, professional web-based calculator built with Flask, HTML, CSS, and JavaScript.

## Project Structure

```
calculator/
├── app.py                    # Flask backend
├── requirements.txt          # Python dependencies
├── README.md                 # This file
├── templates/
│   └── index.html            # Calculator UI
├── static/
│   ├── style.css             # Styling and design
│   └── script.js             # Button interactions
└── tests/                    # Unit tests
    ├── test_operations.py    # Operation tests (57 tests)
    └── test_history.py       # History management tests
```

## Technical Stack

- **Backend**: Flask (Python web framework)
- **Frontend**: HTML5, CSS3, JavaScript
- **Testing**: Python unittest framework

## How It Works

1. User clicks a button or presses a key
2. JavaScript sends the button value to Flask via API (`/button-press`)
3. Flask processes the input and calculates the result
4. Display updates immediately
5. No page reload needed


