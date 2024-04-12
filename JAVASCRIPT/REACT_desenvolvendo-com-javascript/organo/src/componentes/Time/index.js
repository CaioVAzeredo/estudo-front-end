import './time.css'
import Colaborador from '../Colaborador/index.js'

const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        /* colocando operador ternário para execução dos times */
        (props.colaboradores.length > 0) ? (<section className='time' style={css} /* style={{backgroundColor: props.corSecundaria}} */>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            {/* COLABORADOR */}
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} time={colaborador.time} />)}
            </div>
        </section>) : ''
    )
}

export default Time