from conexao import Conexao

class Peca(Conexao):
    def listaTodas(self, id):
        conn = self.CriaConexao()
        cursor = conn.cursor()
        df = cursor.execute('''SELECT * from tb_peca WHERE id_fornecedor=%s''', (id))
        data = cursor.fetchall()
        conn.close()
        return data
    
    def inserePeca(self, body):
        conn = self.CriaConexao()
        cursor = conn.cursor()
        df = cursor.execute('''INSERT INTO tb_peca (nome, ano, marca, estado, quantidade, valor, id_fornecedor)
        VALUES (%s, %s, %s, %s, %s, %s, %s) ''', (body['nome'], body['ano'], body['marca'], body['estado'], body['quantidade'], body['valor'], body['id_fornecedor']
        ))
        conn.commit()
        conn.close()

    def alteraPeca(self, body):
        conn = self.CriaConexao()
        cursor = conn.cursor()
        print(body['nome'])
        df = cursor.execute(''' UPDATE tb_peca SET cadastro=%s, logradouro=%s, numero_logradouro=%s, cep=%s,
        complemento_logradouro=%s  telefone=%s, email=%s, nome=%s WHERE id=%s,''' ,(body['cadastro'], body['logradouro'],body['numero_logradouro'],
        body['cep'],body['complemento_logradouro'],body['telefone'], body['email'], body['nome'], body['id']))
        conn.commit()
        conn.close()

    def excluiPeca(self, id):
        conn = self.CriaConexao()
        cursor = conn.cursor()
        df = cursor = cursor.execute('''DELETE FROM tb_peca WHERE id=%s ''' ,(id))
        conn.commit()
        conn.close()