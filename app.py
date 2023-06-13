from flask import Flask
import api.openai as oai
app = Flask(__name__)


@app.route("/")
def init():
    return "<p>Made with ❤️ by </p>"
