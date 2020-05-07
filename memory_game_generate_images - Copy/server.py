from flask import Flask, render_template, redirect, request, url_for

app = Flask(__name__)

@app.route('/')
def first_page():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(
        debug = True,
        host = "localhost",
        port = 5500
    )