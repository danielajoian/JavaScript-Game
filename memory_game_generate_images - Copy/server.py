from flask import Flask, render_template, redirect, request, url_for

app = Flask(__name__)

@app.route('/')
def first_page():
    return render_template("first_page.html")


@app.route('/play')
def play():
    return render_template("standard.html")

@app.route('/customised')
def customised():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(
        debug=True,
        host="localhost",
        port=5000
    )