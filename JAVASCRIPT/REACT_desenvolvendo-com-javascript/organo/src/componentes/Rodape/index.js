import './Rodape.css'

const Rodape = () => {
    return (
        <section className='rodape'>
            <div className='divRodape'>
                <section className='redes'>
                    <img src={"/imagens/fb.png"} alt={""} /> <img src={"/imagens/tw.png"} alt={""} /> <img src={"/imagens/ig.png"} alt={""} />
                </section>
                <section className='logo'> <img src={"/imagens/logo.png"} alt={""} /> </section>
                <p className='alura'>Desenvolvido por Alura</p>
            </div>
        </section>
    )
}

export default Rodape