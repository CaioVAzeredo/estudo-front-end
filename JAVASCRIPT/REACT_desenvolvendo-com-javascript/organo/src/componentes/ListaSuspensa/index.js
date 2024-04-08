import './listaSuspensa.css'

const listaSuspensa = (props) => {
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }
    return (
        <div className='lista-suspensa' >
            <label>{props.label}</label>
            <select required={props.obrigatorio} value={props.valor} onChange={aoDigitado}>
                {props.itens.map((item, index) => {
                    return <option key={index}>{item}</option>
                })
                }
            </select>
        </div>
    )
}

export default listaSuspensa
