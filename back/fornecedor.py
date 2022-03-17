from conexao import Conexao

class Fornecedor(Conexao):
    def listaTodos(self):
        conn = self.CriaConexao()
        cursor = conn.cursor()
        df = cursor.execute("SELECT * from tb_fornecedor")
        data = cursor.fetchall()
        return data