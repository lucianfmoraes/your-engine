import React from "react";
import frente from '../img/iphone-frente.jpg';
import carburador from '../img/carburador_santana.jpg';
import './ListaProdutos.css';
import { Link } from "react-router-dom";


export const ListaProdutos = () => {
    return(
        <div className="listaProdutos">
            <ContainerFiltros />
            <ContainerProduto produtos={produtos} />
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

const ContainerProduto = ({produtos}) => (
    <div >
        {
            produtos.map(p => (<CardProduto id={p.id} nome={p.nome} preco={p.preco} foto={p.foto} vendedor={p.vendedor} />) )
        }
    </div>
);

export const CardProduto = ({ id, preco, nome, foto, vendedor }) => (
    
        <div className="containerProduto">
            <div className="cardFoto">
                <img src={foto} height='150px' width='150px' className="cardFoto"/>    
            </div>
            <div className="containerInfos">
                <div className="cardNome">
                    <Link to={`/produto/${id}`}>{nome}</Link>
                    <div className="cardSeller">vendido por: {vendedor}</div>
                </div>
                
                <div className="cardFooter">
                    <div className="cardPreco" >R$ {preco}</div>
                    <div className="cardReputacao">Reputação: *****</div>
                </div>
                
            </div>
        </div>
    
)


const produtos = [
    {
        foto: carburador,
        preco: 799.00,
        nome: 'Carburador de Santana',
        vendedor: 'Seu Zé ferro véio',
        id: 1
    },
    {
        foto: frente,
        preco: 79.00,
        nome: 'Capinha premium',
        vendedor: 'Capinhas da Iara',
        id: 2
    },
    {
        foto: frente,
        preco: 499.00,
        nome: 'Extensão bateria',
        vendedor: 'Battery UP',
        id: 3
    },
    {
        foto: frente,
        preco: 19.90,
        nome: 'Fone de ouvido simples',
        vendedor: 'Arlindo Fones',
        id: 4
    },
    {
        foto: frente,
        preco: 59.90,
        nome: 'Headphone grande',
        vendedor: 'Arlindo Fones',
        id: 5
    },
    
]


//export default ListaProdutos;