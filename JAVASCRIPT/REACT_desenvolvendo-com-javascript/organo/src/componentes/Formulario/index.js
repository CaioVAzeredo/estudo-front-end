import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa/index.js'
import Botao from '../Botao'
import './formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'

const formulario = () => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        ' Inovação e Gestão'
    ]

    const aoSalvar = (e) => {
        e.preventDefault()
        prompt("oi")
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para cirar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome " />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa obrigatorio={true} label="Time" itens={times} />
                <Botao> Enviar </Botao>
            </form>
        </section>
    )
}
export default formulario