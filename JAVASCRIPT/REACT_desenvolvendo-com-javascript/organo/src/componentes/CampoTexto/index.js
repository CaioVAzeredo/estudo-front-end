import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...` 

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
<<<<<<< HEAD
            <label>
                {props.label}
            </label>
            {/* 'onChange' é pegar qualquer adição de letra no imput, ele vai executar essa função  */}
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
=======
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder={props.placeholder} />
>>>>>>> 4370ae6c8697ca1af145b2f773241041288debfa
        </div>
    )
}

export default CampoTexto