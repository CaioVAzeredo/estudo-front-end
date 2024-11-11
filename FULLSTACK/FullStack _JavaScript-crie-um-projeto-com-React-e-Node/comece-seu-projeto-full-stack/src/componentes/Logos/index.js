import styled from 'styled-components';
import imagemLogo from '../../imagens/logo.svg';

const LogoConteiner = styled.div`
    display: flex;
    font-size: 30px;
`
const LogoImage = styled.img`
 margin-right: 10px;
`

function Logo() {
    return (
        <LogoConteiner>
            <LogoImage
                src={imagemLogo}
                alt="imagem logo"
            />
            <p><strong>Alura Books</strong></p>
        </LogoConteiner>
    );
}

export default Logo;