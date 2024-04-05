import './listaSuspensa.css'

const listaSuspensa = (props) => {
    return (
        <div className='lista-suspensa' >
            <label>{props.label}</label>
            <select required={props.obrigatorio}>
                <option>Mensagem Padrão</option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default listaSuspensa
