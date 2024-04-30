import style from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'
export default function Banner() {
    return (
        <div className={style.banner}>
            <div className={style.apresentacao}>
                <h1 className={style.titulo}>
                    OLA, MUNDO
                </h1>
                <p className={style.paragrafo}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div className={style.imagens}>
                <img 
                className={style.circuloColorido} 
                src={circuloColorido} 
                aria-hidden={true} 
                />

                <img
                className={style.minhaFoto}
                src={minhaFoto}
                alt='Foto do antonho sorrindo'
                />
            </div>
        </div >
    )
}

