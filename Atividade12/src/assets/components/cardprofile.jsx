function Cardprofile(){
    return(
        <>
            <div className="card">
                <img className='card-img-top' src={props.imagemDaPessoa} alt="" />
                <div className='card-body'>
                    <h5 className='card-title'>{props.NomeDoUsuario}</h5>
                </div>
            </div>
        </>
    );
}

export default Cardprofile;