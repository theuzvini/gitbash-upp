import Cardcompra from "../components/Cardcompra";
import img1 from "../image/yaks.jpg";
import img2 from "../image/salada.jpg";
import img3 from "../image/quibe.jpg";
import img4 from "../image/queijo.jpg";
import img5 from "../image/hamburguer.jpg";

function tela01(){
    return(
        <>
            <div className='col-3 row-2'>
                <Cardcompra imagem= {img1} titulo= 'Feijoada' descricao= 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' corbotao='bg-primary tc-light text-light'/>
                <Cardcompra imagem= {img2} titulo= 'Salada' descricao= 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'  corbotao='bg-primary tc-light text-light'/>
                <Cardcompra imagem= {img3} titulo= 'Quibe' descricao= 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'  corbotao='bg-primary tc-light text-light'/>
                <Cardcompra imagem= {img4} titulo= 'Pão de Queijo' descricao= 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'  corbotao='bg-primary tc-light text-light'/>
                <Cardcompra imagem= {img5} titulo= 'Hamburguer' descricao= 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'  corbotao='bg-primary tc-light text-light'/>
            </div>
        </>
    );
}

export default tela01;