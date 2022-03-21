import {useState, useEffect} from 'react';

const atividadeInicial = {
  id: 0,
  cadastro: '',
  logradouro: '',
  numero_logradouro: '',
  cep:'',
  complemento_logradouro:'',
  telefone:'',
  email:'',
  nome:'',
  prioridade: 0,
  descricao: '',

};

export default function FornecedorForm(props) {
    const [atividade, setAtividade] = useState(atividadeAtual());
    

    useEffect(() => {
      if (props.ativSelecionada.id !== 0) setAtividade(props.ativSelecionada);
    }, [props.ativSelecionada]);

    const inputTextHandler = (e) => {
      const { name, value } = e.target;
      
      setAtividade({ ...atividade, [name]: value});
    };   

    const handleSubmit = (e) => {
      e.preventDefault();

      if(props.ativSelecionada.id !== 0) props.atualizarAtividade(atividade);
      else props.addAtividade(atividade);

      setAtividade(atividadeInicial);
    }

    const handleCancelar = (e) => {
      e.preventDefault();

      props.cancelarAtividade();

      setAtividade(atividadeInicial);
    }

    function atividadeAtual(){
      if(props.ativSelecionada.id !== 0){
        return props.ativSelecionada;
      } else {
        return atividadeInicial;
      }
    }

    return (
      <>

        <h1>CRUD Fornecedor</h1>
        <hr></hr>
        <h3> Cadastro {atividade.id !== 0 ? atividade.id : ''} </h3>
        <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label">Cadastro</label>
          <input
          name='cadastro'
          value={atividade.cadastro}
          onChange={inputTextHandler}
          id='cadastro'
          type='text'
          className="form-control"
           />
        </div>

        <div className="col-md-6">
          <label className="form-label">Logradouro</label>
          <input
          name='logradouro'
          value={atividade.logradouro}
          onChange={inputTextHandler}
          id='logradouro'
          type='text'
          className="form-control"
           />
        </div>

        <div className="col-md-6">
          <label className="form-label">Numero Logradouro</label>
          <input
          name='numero_logradouro'
          value={atividade.numero_logradouro}
          onChange={inputTextHandler}
          id='numero_logradouro'
          type='text'
          className="form-control"
           />
        </div>

        <div className="col-md-6">
          <label className="form-label">CEP</label>
          <input
          name='cep'
          value={atividade.cep}
          onChange={inputTextHandler}
          id='cep'
          type='text'
          className="form-control"
           />
        </div>

        <div className="col-md-6">
          <label className="form-label">Complemento Logradouro</label>
          <input
          name='complemento_logradouro'
          value={atividade.complemento_logradouro}
          onChange={inputTextHandler}
          id='complementou_logradouro'
          type='text'
          className="form-control"
           />
        </div>

        <div className="col-md-6">
          <label className="form-label">Telefone</label>
          <input
          name='telefone'
          value={atividade.telefone}
          onChange={inputTextHandler}
          id='telefone'
          type='text'
          className="form-control"
           />
        </div>

        <div className="col-md-6">
          <label className="form-label">E-Mail</label>
          <input
          name='email'
          value={atividade.email}
          onChange={inputTextHandler}
          id='email'
          type='text'
          className="form-control"
           />
        </div>

        <div className="col-md-6">
          <label className="form-label">Nome</label>
          <input
          name='nome'
          value={atividade.nome}
          onChange={inputTextHandler}
          id='nome'
          type='text'
          className="form-control"
           />
        </div>


        

        <div className="col-md-6">
          <label className="form-label">Prioridade</label>
          <select
            name="prioridade"
            value={atividade.prioridade}
            onChange={inputTextHandler}
            id="prioridade"
            className="form-select"
           >
            <option defaultValue="0">Selecione...</option>
            <option value="1">Baixa</option>
            <option value="2">Normal</option>
            <option value="3">Alta</option>
          </select>
        </div>

        <div className="col-md-12">
          <label className="form-label">Descrição</label>
          <textarea
          name='descricao'
          value={atividade.descricao}
          onChange={inputTextHandler}
          id='descricao'
          type='text'
          className="form-control"
          />
        <hr>
        </hr>
        </div>

        <div className="col-12">
          {atividade.id === 0 ?(
            <button
                className='btn btn-outline-primary'
                type="submit"
            >
              <i className="fas fa-plus me-2"></i>
              Criar
            </button>
     ) : (
            <>
              <button className='btn btn-outline-success me-2'
               type="submit"
              >
                <i className='fas fa-plus me-2'></i>
              Salvar
            </button>
            <button
                className='btn btn-outline-warning'
                onClick={handleCancelar}
              >
                <i className='fas fa-plus me-2'></i>
              Cancelar
            </button>
            </>
     )}
        </div>
      </form>
      </>
    )
}

