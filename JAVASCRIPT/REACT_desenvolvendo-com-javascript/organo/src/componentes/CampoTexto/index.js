import './CampoTexto.css'
const CampoTexto = (props) => { //props tem como parâmetro o que é passado para <CampoTexto label="Nome" placeholder = "Digite seu nome"/> do arquivo App.js que no caso é o label e o placeholder

    return (
        <div className="campo-texto">
            <label>{props.label}</label> {/* acessa o label passado como parametro de props */}
            <input placeholder={props.placeholder} /> {/* acessa o placeholder passado como parametro de props */}
        </div>
    )
}

export default CampoTexto