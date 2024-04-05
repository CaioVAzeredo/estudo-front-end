import './Botao.css'

const Botao = (promps) => {
    return (
        <button className='botao'>
            {promps.children}
        </button>
    )
}

export default Botao