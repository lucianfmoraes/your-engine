from flaskext.mysql import MySQL
from flask import Flask
class Conexao:
    def CriaConexao(self):
        mysql = MySQL()
        app = Flask(__name__)
        app.config['MYSQL_DATABASE_USER'] = 'root'
        app.config['MYSQL_DATABASE_PASSWORD'] = 'Mysql2022@#'
        app.config['MYSQL_DATABASE_DB'] = 'db_yourengine'
        app.config['MYSQL_DATABASE_HOST'] = 'localhost'
        mysql.init_app(app)
        con = mysql.connect()
        return con
