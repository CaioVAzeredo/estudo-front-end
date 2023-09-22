
import './CampoTexto.css'
const CampoTexto = (props) => { //props tem como parâmetro o que é passado para <CampoTexto label="Nome" placeholder = "Digite seu nome"/> do arquivo App.js que no caso é o label e o placeholder

    const aoDigitado = (e) => {
        props.aoAlterado(e.target.value) /* o uso tem que ser feito pelo setValor do hook no arquivo de formulario */
    }
    return (
        <div className="campo-texto">
            <label>{props.label}</label> {/* acessa o label passado como parametro de props */}
            <input
                value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} /> {/* acessa o placeholder passado como parametro de props */}
        </div>
    )
}

export default CampoTexto