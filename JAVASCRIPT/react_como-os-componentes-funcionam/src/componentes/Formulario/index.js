import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'

const Formulario = ({ aoCadastrarColaborador, aoCadastrarTime, times }) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    const aoSubmeterColaborador = (evento) => {
        evento.preventDefault()
        aoCadastrarColaborador({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time
        })
    }
    const aoSubmeterTime = (evento) => {
        evento.preventDefault()
        console.log('FOMULARIO', nomeTime, corTime)
        aoCadastrarTime({
            nomeTime: nomeTime,
            corTime: corTime,
        })
    }

    return (
        <section className="formulario-container">
            <form className="formulario" onSubmit={aoSubmeterColaborador}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite seu nome '
                    valor={nome}
                    aoAlterado={valor => setNome(valor)} />
                <CampoTexto
                    obrigatorio={true}
                    label='Cargo'
                    placeholder='Digite seu cargo '
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)} />
                <CampoTexto
                    label='Imagem'
                    placeholder='Informe o endereço da imagem '
                    aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa
                    obrigatorio={true}
                    label='Times'
                    items={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)} />
                <Botao texto='Criar card' />
            </form>
            <form className="formulario" onSubmit={aoSubmeterTime}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite o nome do time '
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label='Cor'
                    placeholder='Digite a cor do time '
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />
                <Botao texto='Criar time' />
            </form>
        </section>
    )
}

export default Formulario