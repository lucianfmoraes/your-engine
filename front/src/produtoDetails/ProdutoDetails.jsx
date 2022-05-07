import './ProdutoDetails.css';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { customGet } from '../api/Api';

const ProdutoDetails = () => {
    const { id } = useParams();
    const [state, setState] = useState();
    useEffect(()=>{
        const response = async () => {
            const data = await customGet(`/peca/${id}`);
            setState(data);
        }
        response();
    }, [])
    if (!state) return <h1>Loading..</h1>
    return <Produto nome={state['nome']}/>;
}

const Produto = ({nome}) => {
    
    return(
        <div className="containerProduto">
            Detalhes do produto
            <div className="produtoCard">
                <div className="produtoFoto">
                    teste
                </div>
                <ProdutoInfos nome={nome} />
            </div>
            <div>
                fora produto
            </div>
            
        </div>
    )
}

const ProdutoInfos = ({nome}) => (
    <div className="produtoInfos">
        {nome}
    </div>
);
 
export default ProdutoDetails;