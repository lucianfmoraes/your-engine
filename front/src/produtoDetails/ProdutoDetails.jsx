import './ProdutoDetails.css';
import no_img from '../img/no_img.jpg';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { customGet, customPostJSON, outGet } from '../api/Api';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
    return <Produto id={state['id']} nome={state['nome']} ano={state['ano']} marca={state['marca']} endereco={state['endereco']} numero={state['numero']} preco={state['valor']}/>;
}

const Produto = ({id, nome, ano, marca, endereco, numero, preco}) => {
    const [latLon, setLatlon] = useState({lat: undefined, lon:undefined});
    const [modalVisibility, setModalVisibility] = useState(false);

    useEffect(()=>{
        const getLatLong = async () => {
            const data = await outGet(`http://open.mapquestapi.com/geocoding/v1/address?key=aQwdj3YoAEsEaJoWGWC7NfYj5ZH4Eb9o&location=${endereco}`);
            console.log(data['results'][0]['locations'][0]['latLng']['lat'])
            setLatlon({lat: data['results'][0]['locations'][0]['latLng']['lat'], lon:data['results'][0]['locations'][0]['latLng']['lng']});
        }
        getLatLong();
    }, [id]);
    

    const comprarClick = (preco) => {
        setModalVisibility(true);
        console.log(`PREÇO: ${preco}`);
    }
    return(
        <>
        <div className="containerProduto">
            Outras fotos
            <div className="produtoCard">
                <div className="produtoFoto">
                <img src={no_img} height="500px" width="auto"/>
                </div>
                <ProdutoInfos nome={nome} ano={ano} marca={marca}/>
                <Button variant="primary" onClick={()=>{comprarClick(preco)}}>Comprar</Button>
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
        <ModalCompra produtoId={id} produtoNome={nome} produtoPreco={preco} visibility={modalVisibility} setVisibility={setModalVisibility} />
        </>
    )
}

const ModalCompra = ({ produtoId, produtoNome, produtoPreco, visibility, setVisibility }) => {
    const [qrcode, setQrcode] = useState(null);
    /*useEffect(()=>{
        const generatePixQrCode = async () => {
            const data = await customPostJSON(`/pagamento`,{'id_peca': produtoId });
            console.log(data);
            setQrcode(data['qrcode']);
        }
        generatePixQrCode();
    }, [produtoId]);
    */
    const generatePixQrCode = async () => {
        const data = await customPostJSON(`/pagamento`,{'id_peca': produtoId });
        console.log(data['data']);
        setQrcode(data['data']['qrcode']);
    }
    
    if (visibility && !qrcode) generatePixQrCode();

    return (
        <Modal
            size="lg"
            show={visibility}
            onHide={() => setVisibility(false)}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
                Código QR para pagamento via PIX
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <strong>{produtoNome}</strong> com preço de: <strong>R$ {produtoPreco}</strong>
                {
                    <QrCode qrcode={qrcode} />
                }
            </Modal.Body>
        </Modal>
    )
}

const QrCode = ({qrcode}) => {
    if (!qrcode) return <h1>Loading..</h1>
    return (
        <div>
           <img src={`data:image/png;base64,${qrcode}`} width='40%' alt="PIX Qr code"></img>
        </div>
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