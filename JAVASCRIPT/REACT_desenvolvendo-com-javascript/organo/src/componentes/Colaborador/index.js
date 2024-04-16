import './colaborador.css'

const Colaborador = ({ nome, imagem, cargo, corDeFundo }) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h2>{nome}</h2>
                <h5>{cargo}</h5>
            </div>

        </div>
    )
}

export default Colaborador