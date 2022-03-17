from flask import Flask, json, jsonify, request
from flask_cors import CORS, cross_origin
from flaskext.mysql import MySQL

from fornecedor import Fornecedor

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
#######################################################

@app.route('/')
def hello():
    return 'hello world'

@app.route("/fornecedores")
def listaTodosFornecedores():
    fornecedor = Fornecedor()
    resultado = fornecedor.listaTodos()
    return jsonify(resultado)
    


if __name__ == '__main__':
    app.run()