import './estilo.css'
import imagemLogo from '../../imagens/logo.svg';

function Logo() {
    return (
        <div className='logo'>
            <img src={imagemLogo} alt="imagem logo" className='logo-img'></img>
            <p><strong>Alura Books</strong></p>
        </div>
    );
}

export default Logo;