import './ProdutoDetails.css';
import no_img from '../img/no_img.jpg';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { customGet, outGet } from '../api/Api';

const ProdutoDetails = () => {
    const { id } = useParams();
    const [state, setState] = useState();
    useEffect(()=>{
        const response = async () => {
            const data = await customGet(`/peca/${id}`);
            setState(data);
        }
        response();
    }, [id])
    if (!state) return <h1>Loading..</h1>
    return <Produto id={state['id']} nome={state['nome']} ano={state['ano']} marca={state['marca']} endereco={state['endereco']} numero={state['numero']}/>;
}

const Produto = ({id, nome, ano, marca, endereco, numero}) => {
    const [latLon, setLatlon] = useState({lat: undefined, lon:undefined});
    useEffect(()=>{
        const getLatLong = async () => {
            const data = await outGet(`http://open.mapquestapi.com/geocoding/v1/address?key=aQwdj3YoAEsEaJoWGWC7NfYj5ZH4Eb9o&location=${endereco}`);
            console.log(data['results'][0]['locations'][0]['latLng']['lat'])
            setLatlon({lat: data['results'][0]['locations'][0]['latLng']['lat'], lon:data['results'][0]['locations'][0]['latLng']['lng']});
        }
        getLatLong();
    }, [id])
    return(
        <>
        <div className="containerProduto">
            Outras fotos
            <div className="produtoCard">
                <div className="produtoFoto">
                <img src={no_img} height="500px" width="auto"/>
                </div>
                <ProdutoInfos nome={nome} ano={ano} marca={marca}/>
            </div>
            <div>
                {endereco}, {numero}
            </div>
        </div>
        <div className='wazeframe'>
        {
            latLon.lat ? (<iframe src={`https://embed.waze.com/pt-BR/iframe?zoom=14&lat=${latLon.lat}&lon=${latLon.lon}&pin=2&desc=MinhaLoja`}
            width="100%" height="500px"></iframe>) : <h1>Loading..</h1>
        }
        </div>
        </>
    )
}

const ProdutoInfos = ({nome, ano, marca}) => (
    <div className="produtoInfos">
        <strong> {nome} </strong> <br/>
        {ano} <br/>
        {marca} <br/>
    </div>
);
 
export default ProdutoDetails;