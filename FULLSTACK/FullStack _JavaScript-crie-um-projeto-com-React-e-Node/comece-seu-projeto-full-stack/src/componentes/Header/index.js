import IconeHeader from '../Icones'
import Logo from '../Logos'
import Opcoes from '../Opcoes'
import styled from 'styled-components'

const HeaderContainer = styled.header`

    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

`

function Header() {
    return (<HeaderContainer>
        <Logo /> <Opcoes />  <IconeHeader />
    </HeaderContainer>)
}

export default Header