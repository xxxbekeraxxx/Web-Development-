class Question:
    def __init__(self, question_text, options, correct_answer):
        self.question_text = question_text
        self.options = options
        self.correct_answer = correct_answer
    
    def check_answer(self, user_answer):
        return user_answer == self.correct_answer