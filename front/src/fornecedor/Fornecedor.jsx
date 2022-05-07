import { useEffect, useState } from 'react';
import { customGet, customPost } from '../api/Api';

import FornecedorForm from './FornecedorForm';
import FornecedorLista from './FornecedorLista';

function Fornecedor() {
  const [index,setIndex] = useState(0);
  const [atividades, setAtividades] = useState([]);
  const [atividade, setAtividade] = useState({id:0});

  useEffect(() => {
    const response = async () => {
        const data = await customGet('/fornecedor');
        setAtividades(data);
    };
    response();

    (atividades.length <= 0 || atividades === null ) ? setIndex(1) :
    setIndex(Math.max.apply(Math,atividades.map((item) => item.id)) +1 )
    
  }, [])

  function addAtividade(ativ) {
    const addAtividadeAPI = async (ativ) => {
        const data = await customPost('/fornecedores', ativ);
    };
    addAtividadeAPI(ativ);
    
    const getAllAtividadesAPI = async () => {
        const data = await customGet('/fornecedor');
        setAtividades(data);
    };
    getAllAtividadesAPI();
    
    setAtividades([...atividades, 
    { ...ativ,id: index  }]
    
    );
    console.log(atividades);
  }


  function cancelarAtividade(){
    setAtividade({id: 0});
  }

  function atualizarAtividade(ativ){
    setAtividades(atividades.map(item => item.id === ativ.id ? ativ : item));
    setAtividade({id: 0});
  }

  function deletarAtividade(id){
    const deleteFornecedorAPI = async (id) => {
        const data = await customPost(`/fornecedor/excluir/${id}`);
    };
    deleteFornecedorAPI(id);
    const getAllAtividadesAPI = async () => {
        const data = await customGet('/fornecedores');
        setAtividades(data);
    };
    getAllAtividadesAPI();
  }

function pegarAtividade(id) {
  const atividade = atividades.filter((atividade) => atividade.id === id );
  setAtividade(atividade[0]);
}

  return (
    <div style={{margin: '2%'}}>
      <FornecedorForm
      addAtividade={addAtividade}
      cancelarAtividade={cancelarAtividade}
      atualizarAtividade={atualizarAtividade}
      ativSelecionada={atividade}
      atividades={atividades}
      />
    <FornecedorLista
    atividades={atividades}
    deletarAtividade={deletarAtividade}
    pegarAtividade={pegarAtividade}/>
    </div>
  );
}

export default Fornecedor;