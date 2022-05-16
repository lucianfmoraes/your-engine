import requests, json
from conexao import Conexao

class Pagamento(Conexao):
    def efetuarPix(self, body):
        conn = self.CriaConexao()
        cursor = conn.cursor()
        cursor.execute('''SELECT PECA.id id_peca, PAG.id_forma_pagamento, PAG.id_fornecedor, PAG.access_key 
                        FROM tb_infos_pagamento PAG 
                        INNER JOIN tb_peca PECA ON PAG.id_fornecedor = PECA.id_fornecedor
                        WHERE PECA.id=%s''', (body['id_peca']))
        data = cursor.fetchall()
        data = {
            'id_peca': data[0][0],
            'id_forma_pagamento': data[0][1],
            'id_fornecedor': data[0][2],
            'access_key': data[0][3]
            }
        conn.close()
        #requests.get("https://api.mercadopago.com/v1/payments")
        url = "https://api.mercadopago.com/v1/payments"
        payload = {
            "transaction_amount": 1,
            "description": "Título do produto",
            "payment_method_id": "pix",
            "payer": {
                "email": "test@test.com",
                "first_name": "Test",
                "last_name": "User",
                "identification": {
                    "type": "CPF",
                    "number": "191191191-00"
                },
                "address": {
                    "zip_code": "06233-200",
                    "street_name": "Av. das Nações Unidas",
                    "street_number": "3003",
                    "neighborhood": "Bonfim",
                    "city": "Osasco",
                    "federal_unit": "SP"
                }
            }
        }
        access = data["access_key"]
        headers = {'Content-Type': 'application/json', 'Authorization': f'Bearer {data["access_key"]}', 'Connection': 'keep-alive'}
        
        try:
            response = requests.post(url, data=json.dumps(payload), headers=headers)
            if response.status_code == 201:
                response = dict.copy(response.json())
                
                response = {
                    'id': response['id'],
                    'expiration_date': response['date_of_expiration'],
                    'status': response['status'],
                    'status_code': 201,
                    'qrcode': response['point_of_interaction']['transaction_data']['qr_code_base64']
                    }
            else:
                response = {'status_code': response.status_code, 'message': response.json()['message']}
        except: 
            response = {'status_code': response.status_code, 'message': 'Não foi possivel criar o QR Code PIX'}
        finally: 
            return response
            
        
        
        
        