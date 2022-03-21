from inspect import BoundArguments
from sqlite3 import Cursor
from conexao import Conexao

class Fornecedor(Conexao):
    def listaTodos(self):
        conn = self.CriaConexao()
        cursor = conn.cursor()
        df = cursor.execute('''SELECT * from tb_fornecedor''')
        data = cursor.fetchall()
        conn.close()
        return data

    def insereFornecedor(self, body):
        conn = self.CriaConexao()
        cursor = conn.cursor()
        print(body['nome'])
        df = cursor.execute('''INSERT INTO tb_fornecedor(cadastro,logradouro,numero_logradouro,cep,
        complemento_logradouro,telefone,email,nome)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s)''',(body['cadastro'], body['logradouro'],body['numero_logradouro'],
        body['cep'],body['complemento_logradouro'],body['telefone'], body['email'], body['nome']))
        conn.commit()
        conn.close()
    
    def alteraFornecedor(self, body):
        conn = self.CriaConexao()
        cursor = conn.cursor()
        print(body['nome'])
        df = cursor.execute(''' UPDATE tb_fornecedor SET cadastro=%s, logradouro=%s, numero_logradouro=%s, cep=%s,
        complemento_logradouro=%s,  telefone=%s, email=%s, nome=%s WHERE id=%s''' ,(body['cadastro'], body['logradouro'],body['numero_logradouro'],
        body['cep'],body['complemento_logradouro'],body['telefone'], body['email'], body['nome'], body['id']))
        conn.commit()
        conn.close()
    
    def excluiFornecedor(self, id):
        conn = self.CriaConexao()
        cursor = conn.cursor()
        df = cursor = cursor.execute('''DELETE FROM tb_fornecedor WHERE id=%s ''' ,(id))
        conn.commit()
        conn.close()


    

    
        
        