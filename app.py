from flask import Flask

app = Flask(__name__)


@app.route("/")
def init():
    return "<p>Made with ❤️ by </p>"
