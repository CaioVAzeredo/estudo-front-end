<<<<<<< HEAD
import { useState } from 'react'
import Botao from '../Botao'
=======
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa/index.js'
import Botao from '../Botao'
import './formulario.css'
>>>>>>> 4370ae6c8697ca1af145b2f773241041288debfa
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {
    /* ---------------------------------------------------- */
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        ' Inovação e Gestão'
    ]
<<<<<<< HEAD
    /* ---------------------------------------------------- */
    //nome = informação guardada. setNome = informação que vamos modificar. aspas do useState() é o valor padrão
    const [nome, setNome] = useState('Caio Viana')
    const [cargo, setCargo] = useState('CEO')
    const [imagem, setImagem] = useState('HTTP...')
    const [time, setTime] = useState('')
    /* ---------------------------------------------------- */
    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time,
        })
=======

    const aoSalvar = (e) => {
        e.preventDefault()
        prompt("oi")
>>>>>>> 4370ae6c8697ca1af145b2f773241041288debfa
    }

    return (
        <section className="formulario">
            {/* onSubmit chama a função  */}
            <form onSubmit={aoSalvar}>
<<<<<<< HEAD
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
=======
                <h2>Preencha os dados para cirar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome " />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa obrigatorio={true} label="Time" itens={times} />
                <Botao> Enviar </Botao>
>>>>>>> 4370ae6c8697ca1af145b2f773241041288debfa
            </form>
        </section>
    )
}

export default Formulario