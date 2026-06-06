# Web Calculator

A modern, professional web-based calculator built with Flask, HTML, CSS, and JavaScript.

## Features

- Clean, intuitive calculator interface
- Display screen with real-time updates
- Number buttons (0-9) with decimal point support
- Operations: Addition (+), Subtraction (-), Multiplication (×), Division (÷)
- Control buttons: Clear (C), Backspace (⌫), Equals (=)
- Full keyboard support
- Responsive design for desktop, tablet, and mobile
- Modern vibrant UI with smooth animations and hover effects

## Quick Start

### Install Dependencies
```bash
pip install -r requirements.txt
```

### Run the Application
```bash
python app.py
```

Open your browser to: **http://localhost:5000**

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

## Usage

1. **Enter a number**: Click buttons 0-9 or use keyboard
2. **Choose operation**: Click +, -, ×, ÷
3. **Enter second number**: Click more number buttons
4. **Calculate**: Click = or press Enter
5. **Clear**: Click C or press C key
6. **Delete last digit**: Click ⌫ or press Backspace

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| 0-9 | Enter digit |
| . | Decimal point |
| + / - | Add/Subtract |
| * | Multiply |
| / | Divide |
| Enter or = | Calculate |
| Backspace | Delete last digit |
| C | Clear all |

## Browser Support

- Chrome
- Firefox
- Safari
- Edge
- Mobile browsers

## Testing

Run all 57 unit tests:
```bash
python -m unittest discover -s tests -p "test_*.py" -v
```

All tests verify:
- Basic operations (add, subtract, multiply, divide)
- Advanced operations (power, modulus, square root, percentage, average)
- Error handling (division by zero, invalid input)
- History management (add, save, load, clear, statistics)

## Technical Stack

- **Backend**: Flask (Python web framework)
- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: Modern vibrant theme with gradients and animations
- **Testing**: Python unittest framework

## How It Works

1. User clicks a button or presses a key
2. JavaScript sends the button value to Flask via API (`/button-press`)
3. Flask processes the input and calculates the result
4. Display updates immediately
5. No page reload needed

## Design Features

- Dark navy calculator body with vibrant purple-blue gradient background
- Orange accent colors for operators and equals button
- Smooth 3px lift hover effects on buttons
- Ripple animations on button click
- Professional typography and spacing
- Fully responsive across all devices
- WCAG accessibility compliance

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Port 5000 in use" | Change port in app.py line 54 |
| "ModuleNotFoundError: Flask" | Install: `pip install Flask` |
| "Buttons not responding" | Check browser console (F12) for errors |
| "Calculations not working" | Ensure Flask is running and browser is connected |

## Performance

- Single page application (SPA)
- Asynchronous API calls
- Lightweight and fast
- Optimized CSS with CSS variables
- No data persistence between sessions

## Limitations

- Calculations cleared on page refresh
- No calculation history storage
- Basic arithmetic operations only

**Start calculating: `python app.py` then open http://localhost:5000**
