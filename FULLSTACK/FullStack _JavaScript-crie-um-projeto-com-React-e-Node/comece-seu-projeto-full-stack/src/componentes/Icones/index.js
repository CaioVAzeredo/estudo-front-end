import './estilo.css'
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'

const icones = [perfil, sacola]
function Icone() {
    return <ul className='icones'>
        {icones.map(icone => (<li className='icone'><img src={icone} alt={icone} /></li>))}
    </ul>
}

export default Icone;