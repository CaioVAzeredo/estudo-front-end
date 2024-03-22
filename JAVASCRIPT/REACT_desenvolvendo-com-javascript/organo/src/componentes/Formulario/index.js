import CampoTexto from '../CampoTexto'
import './formulario.css'

const formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para cirar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite o seu nome " />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                

            </form>
        </section>
    )
}
export default formulario