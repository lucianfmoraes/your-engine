import React, { useEffect, useState } from "react";
import '../listaProdutos/ListaProdutos.css';
import {ContainerFiltros, CardProduto} from '../listaProdutos/ListaProdutos.jsx';
import { customGet } from "../api/Api";

const ListaFornecedores = () => {
    const [state, setState] = useState([]);
    
    useEffect( () => {
        const response = async () => {
          const data = await customGet('/fornecedor');
          setState(data);
        };
        response();
      }, []);
      console.log(state);

      return(
        <div className="listaProdutos">
            <ContainerFiltros />
            <ContainerFornecedor fornecedores={state} />
        </div>
    )
};

const ContainerFornecedor = ({fornecedores}) => (
    <div >
        {
            fornecedores.map(f => (<CardProduto nome={f[8]} preco={f.preco} foto={f.foto} vendedor={f[7]} />) )
        }
    </div>
);

export default ListaFornecedores;
