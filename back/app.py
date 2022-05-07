
from flask import Flask, json, jsonify, request
from flask_cors import CORS, cross_origin
from flaskext.mysql import MySQL
from cliente import Cliente
from fornecedor import Fornecedor
from peca import Peca
##
app = Flask(__name__)
#cors = CORS(app)
cors = CORS(app, resources={r"/fornecedor/*": {"origins": "http://localhost:3000"}})
cors = CORS(app, resources={r"/peca/*": {"origins": "http://localhost:3000"}})
app.config['CORS_HEADERS'] = 'Content-Type'
# app.config['CORS_RESOURCES'] = {r"/fornecedores/*": {"origins": "http://localhost:4000"}}
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
#######################################################

@app.route('/')
def hello():
    return 'hello world'


### FORNECEDORES ###

@app.route("/fornecedor")
def listaTodosFornecedores():
    fornecedor = Fornecedor()
    resultado = fornecedor.listaTodos()
    return jsonify(resultado)

@app.route("/fornecedor/peca/<int:id>")
def listaPecasPorFornecedor(id):
    peca = Peca()
    resultado = peca.listaPorFornecedor(id)
    return jsonify(resultado)

@app.route("/fornecedor",  methods=['POST'])
def insereFornecedor():
    fornecedor = Fornecedor()
    corpo = request.json
    print(corpo)
    resultado = fornecedor.insereFornecedor(corpo)
    return jsonify({'status': 200})

@app.route("/fornecedor/alterar", methods=['POST'])
def alteraFornecedor():
    fornecedor = Fornecedor()
    body = request.json()
    resultado = fornecedor.alteraFornecedor(body)
    return jsonify(resultado)

@app.route("/fornecedor/excluir/<int:id>", methods=['POST'])
def excluiFornecedor(id):    
    fornecedor = Fornecedor()
    resultado = fornecedor.excluiFornecedor(id)
    return jsonify({'status': 'Deleted'})

@app.route("/fornecedor/peca/inserir", methods=['POST'])
def inserePecas():
    peca = Peca()
    corpo = request.json
    resultado = peca.inserePeca(corpo)
    return jsonify(resultado)

@app.route("/fornecedor/peca/alterar", methods=['POST'])
def alteraPecas():
    peca = Peca()
    corpo = request.json
    resultado = peca.alteraPeca(corpo)
    return jsonify(resultado)

@app.route("/fornecedor/peca/excluir/<int:id>", methods=['POST'])
def excluiPeca(id):
    peca = Peca()
    resultado = peca.excluiPeca(id)
    return jsonify(resultado)


### CLIENTES ###

@app.route("/cliente")
def listaTodosClientes():
    cliente = Cliente()
    resultado = cliente.listaTodos()
    return jsonify(resultado)


@app.route("/cliente",  methods=['POST'])
def insereCliente():
    cliente = Cliente()
    corpo = request.json
    resultado = cliente.insereCliente(corpo)
    return jsonify(resultado)


@app.route("/cliente/alterar",  methods=['POST'])
def alteraCliente():
    cliente = Cliente()
    corpo = request.json
    resultado = cliente.alteraCliente(corpo)
    return jsonify(resultado)

@app.route("/cliente/excluir/<int:id>", methods=['POST'])
def excluiCliente(id):    
    cliente = Cliente()
    resultado = cliente.excluiCliente(id)
    return jsonify(resultado)


### PECAS ###

@app.route("/peca")
def listaTodasAsPecas():
    peca = Peca()
    resultado = peca.listaTodas()
    return jsonify(resultado)

@app.route("/peca/<int:id>")
def listaPorId(id):
    peca = Peca()
    resultado = peca.listaPorId(id)
    return jsonify(resultado)


if __name__ == '__main__':
    app.run()