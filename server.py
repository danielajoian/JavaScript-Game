from flask import Flask, render_template, request, url_for

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')


@app.route('/game', methods=['GET', 'POST'])
def game():
    return render_template('game.html')


if __name__=='__main__':
    app.run(
        debug=True,
        host='localhost',
        port=5300
    )