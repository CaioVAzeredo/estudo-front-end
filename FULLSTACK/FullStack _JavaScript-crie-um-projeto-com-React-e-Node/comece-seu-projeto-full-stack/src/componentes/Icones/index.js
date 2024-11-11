import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const Icone = styled.li`
    margin: 40px;
    width: 25px;
    cursor: pointer;

`
const Icones = styled.ul`
display: flex;
align-items: center;

`

const icones = [perfil, sacola]
function IconeHeader() {
    return <Icones>
        {icones.map(icone => (<Icone><img src={icone} alt={icone} /></Icone>))}
    </Icones>
}

export default IconeHeader;