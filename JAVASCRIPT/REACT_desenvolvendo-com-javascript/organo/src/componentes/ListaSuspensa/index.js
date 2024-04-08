<<<<<<< HEAD
import './ListaSuspensa.css'
const ListaSuspensa = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }
=======
import './listaSuspensa.css'
>>>>>>> 4370ae6c8697ca1af145b2f773241041288debfa

const listaSuspensa = (props) => {
    return (
        <div className='lista-suspensa' >
            <label>{props.label}</label>
<<<<<<< HEAD
            <select required={props.obrigatorio} value={props.valor} onChange={aoDigitado}>
                {props.itens.map((item, index) => {
                    return <option key={index}>{item}</option>
                })
                }
=======
            <select required={props.obrigatorio}>
                <option>Mensagem Padrão</option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
>>>>>>> 4370ae6c8697ca1af145b2f773241041288debfa
            </select>
        </div>
    )
}

<<<<<<< HEAD
export default ListaSuspensa
=======
export default listaSuspensa
>>>>>>> 4370ae6c8697ca1af145b2f773241041288debfa
