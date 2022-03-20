from conexao import Conexao


class Cliente(Conexao):
    def listaTodos(self):
        conn = self.CriaConexao()
        cursor = conn.cursor()
        df = cursor.execute('''SELECT * from tb_cliente''')
        data = cursor.fetchall()
        conn.close()
        return data

    def insereCliente(self, body):
        conn = self.CriaConexao()
        cursor = conn.cursor()
        print(body['nome'])
        df = cursor.execute('''INSERT INTO tb_cliente(cadastro,logradouro,numero_logradouro,cep,
        complemento_logradouro,telefone,email,nome)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s)''',(body['cadastro'], body['logradouro'],body['numero_logradouro'],
        body['cep'],body['complemento_logradouro'],body['telefone'], body['email'], body['nome']))
        conn.commit()
        conn.close()
    
    def alteraCliente(self, body):
        conn = self.CriaConexao()
        cursor = conn.cursor()
        print(body['nome'])
        df = cursor.execute(''' UPDATE tb_cliente SET cadastro=%s, logradouro=%s, numero_logradouro=%s, cep=%s,
        complemento_logradouro=%s  telefone=%s, email=%s, nome=%s WHERE id=%s,''' ,(body['cadastro'], body['logradouro'],body['numero_logradouro'],
        body['cep'],body['complemento_logradouro'],body['telefone'], body['email'], body['nome'], body['id']))
        conn.commit()
        conn.close()
    
    def excluiCliente(self, id):
        conn = self.CriaConexao()
        cursor = conn.cursor()
        df = cursor = cursor.execute('''DELETE FROM tb_cliente WHERE id=%s ''' ,(id))
        conn.commit()
        conn.close()