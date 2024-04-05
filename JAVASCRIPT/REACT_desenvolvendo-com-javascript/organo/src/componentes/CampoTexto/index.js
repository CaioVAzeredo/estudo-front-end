import './CampoTexto.css'
const CampoTexto = (props) => {

    let valor = 'Caio viana'
    const aoDigitado = (e) => {
        valor = e.target.value
        console.log(valor)
    }
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto