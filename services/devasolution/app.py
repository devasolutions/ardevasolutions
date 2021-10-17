from flask import Flask, jsonify, request
from error import Error
import os

app = Flask(__name__)

@app.route('/', methods=['POST'])
def classifier():
    pass


if __name__ == '__main__':
    app.run(host='0.0.0.0')
