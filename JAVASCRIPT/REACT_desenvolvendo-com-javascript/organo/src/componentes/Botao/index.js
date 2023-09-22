import './Botao.css'

const Botao = (props) => {
    console.log(props.texto)
    return (
        <button className="botao">
            {props.children} {/* .children é tudo que é colocado dentro da tag: <Botao>
                    Criar Card
                </Botao>*/}
        </button>
    )
}

export default Botao