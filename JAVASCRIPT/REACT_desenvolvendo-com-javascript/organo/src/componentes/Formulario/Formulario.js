import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { useState } from 'react'

const Formulario = () => {
    /* array */
    const times = [
        'Programação',
        'Front-end',
        'Data Science',
        'DevOps',
        'UX e Desing',
        'Mobile',
        'Inovação e gestão',
    ]

    /* hook */
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    
    /* funçao salvar */
    const aoSalvar = (e) => {
        e.preventDefault()
        console.log(`submetido => ${nome} ${cargo} ${imagem}`)
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2 >
                    Preencha os dados para criar o card do colaborador
                </h2>
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
                    obrigatorio={true}
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={times} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario