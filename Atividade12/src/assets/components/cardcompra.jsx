function Cardcompra(props) {
    return(
        <>
            <div className="card">
                <img className='card-img-top' src={props.imagem} alt="" />
                <div className='card-body'>
                    <h5 className='card-title'>{props.titulo}</h5>
                    <p className='card-text'>{props.descricao}</p>
                    <button className={`btn ${props.corbotao}`}>Comprar</button>
                </div>
            </div>
        </>
    );
}
export default Cardcompra;