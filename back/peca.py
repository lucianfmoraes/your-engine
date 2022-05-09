from conexao import Conexao

class Peca(Conexao):
    def listaPorFornecedor(self, id):
        conn = self.CriaConexao()
        cursor = conn.cursor()
        df = cursor.execute('''SELECT * from tb_peca WHERE id_fornecedor=%s''', (id))
        data = cursor.fetchall()
        conn.close()
        return data

    def listaTodas(self):
        conn = self.CriaConexao()
        cursor = conn.cursor()
        df = cursor.execute('''SELECT P.id, P.nome, P.ano, P.marca, P.estado, P.quantidade, P.valor, F.nome from tb_peca P 
                                INNER JOIN tb_fornecedor F ON P.id_fornecedor = F.id  ''')
        data = cursor.fetchall()
        response = [{
            'id': row[0],
            'nome': row[1],
            'ano': row[2],
            'marca':row[3],
            'estado': row[4],
            'quantidade': row[5],
            'valor': row[6],
            'fornecedor_nome': row[7]
        } for row in data]
        conn.close()
        return response
    
    def listaPorId(self, id):
        conn = self.CriaConexao()
        cursor = conn.cursor()
        df = cursor.execute(''' SELECT P.id, P.nome, P.ano, P.marca, P.estado, P.quantidade, P.valor, F.nome, F.logradouro, F.id 
                                FROM tb_peca P 
                                LEFT JOIN tb_fornecedor AS F ON P.id_fornecedor = F.id
                                WHERE P.id=%s''', (id))
        data = cursor.fetchall()
        if not data:
            return None
        data = [{
            'id': d[0],
            'nome':d[1],
            'ano': d[2],
            'marca':d[3],
            'estado': d[4],
            'quantidade': d[5],
            'valor': d[6],
            'id_fornecedor':d[7],
            'endereco': d[8]
        } for d in data]
        conn.close()
        return data[0]

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
        df = cursor.execute(''' UPDATE tb_peca SET nome=%s, ano=%s, marca=%s, estado=%s,
        quantidade=%s,  valor=%s, id_fornecedor=%s WHERE id=%s''' ,(body['nome'], body['ano'],body['marca'],
        body['estado'],body['quantidade'],body['valor'],  body['id_fornecedor'], body['id']))
        conn.commit()
        conn.close()

    def excluiPeca(self, id):
        conn = self.CriaConexao()
        cursor = conn.cursor()
        df = cursor = cursor.execute('''DELETE FROM tb_peca WHERE id=%s ''' ,(id))
        conn.commit()
        conn.close()