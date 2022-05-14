import React, { useEffect, useState } from "react";
//import no_img from '../img/no_img.jpg';
import carb_img from '../img/carburador_santana.jpg';
import './ListaProdutos.css';
import { Link } from "react-router-dom";
import { customGet } from "../api/Api";

//const qr_code_base64 = "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"

export const ListaProdutos = () => {
    const [produtos, setProdutos] = useState([]);
    useEffect(() => {
        const getProdutos = async () => {
            const data = await customGet('/peca');
            setProdutos(data);
        }
        getProdutos();
    },[])

    return (
    <div className="listaProdutos">
        {
            produtos.map(p => (<CardProduto id={p.id} nome={p.nome} preco={p.valor} foto={carb_img} vendedor={p.fornecedor_nome} />) )
        }
    </div>
    )
};

export const ContainerFiltros = () => (
    <div className="containerFiltros">
        <label>Filtro 1</label>
        <label>Filtro 2</label>
        <label>Filtro 3</label>
        <label>Filtro 4</label>
    </div>
);


export const CardProduto = ({ id, preco, nome, foto, vendedor }) => (
        <div className="cardProduto">
            <Link to={`/produto/${id}`} className="linkProduto" >
                <div className="cardFoto">
                    { /*<img src={`data:image/jpeg;base64,${qr_code_base64}`} height='150px' width='150px'/> */}
                    <img src={foto} alt="an auto-part" height='100%' width='100%' style={{borderRadius:'5px'}}/>
                    <hr style={{margin: '0px'}} />
                </div>
                <div className="containerInfos">
                    <div className="cardNome">
                        {nome}
                        
                    </div>
                    
                    <div className="cardFooter">
                        <div className="cardPreco" >R$ {preco}</div>
                        <div className="cardReputacao">Reputação: *****</div>
                    </div>
                    
                </div>
            </Link>
        </div>
    
    
)



//export default ListaProdutos;