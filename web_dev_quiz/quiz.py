from flask import Flask, request, session, redirect
from data import questions_data
from question import Question
import html

app = Flask(__name__)
app.secret_key = 'simple-secret-key'

questions = []
for q in questions_data:
    questions.append(Question(q['question'], q['options'], q['correct_answer']))

def render_page(title, body):
    """Простая функция для генерации HTML"""
    return f"""
    <!DOCTYPE html>
    <html>
    <head>
        <title>{title}</title>
    </head>
    <body style="font-family: Arial; max-width: 600px; margin: 50px auto; padding: 20px;">
        {body}
    </body>
    </html>
    """

@app.route('/')
def index():
    body = """
    <h1>Web Development Quiz</h1>
    <p>Test your knowledge of HTML, CSS, and JavaScript!</p>
    
    <div style="border: 1px solid #ccc; padding: 15px; margin: 20px 0;">
        <h3>Quiz Features:</h3>
        <ul>
            <li>5 web development questions</li>
            <li>Multiple choice format</li>
            <li>Score tracking</li>
        </ul>
    </div>
    
    <a href="/start_quiz" style="display: inline-block; padding: 10px 20px; background: #007bff; color: white; text-decoration: none;">Start Quiz →</a>
    
    <p style="margin-top: 20px;">5 questions to test your web development skills</p>
    """
    return render_page("Web Dev Quiz", body)

@app.route('/start_quiz')
def start_quiz():
    session['index'] = 0
    session['score'] = 0
    return redirect('/question')

@app.route('/question')
def question():
    index = session.get('index', 0)
    
    if index >= len(questions):
        return redirect('/result')
    
    q = questions[index]

    options_html = ""
    for opt in q.options:
        options_html += f"""
        <div style="margin: 10px 0;">
            <input type="radio" name="answer" value="{html.escape(opt)}" required>
            <label>{html.escape(opt)}</label>
        </div>
        """
    
    body = f"""
    <div style="margin-bottom: 20px;">
        Question {index + 1} of {len(questions)}
    </div>
    
    <h2>{html.escape(q.question_text)}</h2>
    
    <form action="/submit_answer" method="POST">
        {options_html}
        <button type="submit" style="padding: 10px 20px; background: #007bff; color: white; border: none; margin-top: 20px; cursor: pointer;">
            Submit Answer
        </button>
    </form>
    """
    
    return render_page(f"Question {index + 1}", body)

@app.route('/submit_answer', methods=['POST'])
def submit_answer():
    answer = request.form.get('answer', '')
    index = session.get('index', 0)
    
    if index < len(questions) and questions[index].check_answer(answer):
        session['score'] = session.get('score', 0) + 1
    
    session['index'] = index + 1
    return redirect('/question')

@app.route('/result')
def result():
    score = session.get('score', 0)
    total = len(questions)
    
    message = ""
    if score == total:
        message = "Perfect score! Excellent work!"
    elif score >= total/2:
        message = "Good job! Keep learning!"
    else:
        message = "Keep practicing! Try again!"
    
    body = f"""
    <h1>Quiz Complete!</h1>
    
    <div style="font-size: 48px; color: #28a745; margin: 20px 0;">
        {score}/{total}
    </div>
    
    <p>You scored {score} out of {total}</p>
    <p>{message}</p>
    
    <div style="margin-top: 30px;">
        <a href="/start_quiz" style="display: inline-block; padding: 10px 20px; background: #007bff; color: white; text-decoration: none; margin-right: 10px;">Try Again</a>
        <a href="/" style="display: inline-block; padding: 10px 20px; background: #6c757d; color: white; text-decoration: none;">Home</a>
    </div>
    """
    
    return render_page("Quiz Results", body)

if __name__ == '__main__':
    app.run(debug=True, port=5000)