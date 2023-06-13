from flask import Flask
from api import querygpt

app = Flask(__name__)


@app.route("/")
def init():
    shawarma()
    return "<p>Made with ❤️ by </p>"


def shawarma():
    print(
        querygpt.gen_assess_and_reflection(
            "The topic is thermodynamics, how can you help me?"
        )
    )
