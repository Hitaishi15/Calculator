from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

display = "0"
prev_num = None
operator = None
reset_display = False


def calculate(a: float, b: float, op: str) -> float:
    try:
        if op == "+":
            return a + b
        elif op == "-":
            return a - b
        elif op == "×":
            return a * b
        elif op == "÷":
            return 0 if b == 0 else a / b
    except:
        return 0


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/button-press', methods=['POST'])
def button_press():
    global display, prev_num, operator, reset_display
    
    value = request.json.get('value')
    
    if value.isdigit():
        if reset_display:
            display = value
            reset_display = False
        else:
            display = value if display == "0" else display + value
    
    elif value == ".":
        if reset_display:
            display = "0."
            reset_display = False
        elif "." not in display:
            display += "."
    
    elif value in ["+", "-", "×", "÷"]:
        if prev_num is None and display:
            prev_num = float(display)
        elif prev_num is not None and not reset_display:
            result = calculate(prev_num, float(display), operator)
            display = str(result)
            prev_num = result
        
        operator = value
        reset_display = True
    
    elif value == "=":
        if prev_num is not None and operator:
            result = calculate(prev_num, float(display), operator)
            display = str(result)
            prev_num = None
            operator = None
            reset_display = True
    
    elif value == "C":
        display = "0"
        prev_num = None
        operator = None
        reset_display = False
    
    elif value == "⌫":
        display = display[:-1] if len(display) > 1 else "0"
    
    return jsonify({'display': display})


if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=5000)
