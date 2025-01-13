import Link from "../src/components/Link";
import Head from 'next/head'

// SSG - Static Site Generation
// SSR - Server Side Rendering
// ISG - Incremental Static Generation

/* export async function getServerSideProps(){
    console.log('Em modo DEV, sempre roda! A cada acesso')
    console.log('Rodando a cada acesso que você recebe')
} */

export async function getStaticProps() {
    console.log('Em modo DEV, sempre roda! A cada acesso')
    console.log('Roda SOMENTE em build time')
    const URL = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json"
    const faq = await fetch(URL)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            return response
        })

    return {
        props: {
            qualquercoisa: 'que eu passar aqui',
            faq
        }
    }
}

export default function Faq({ faq }) {
    console.log('Isso roda no servidor?')
    return (
        <div>
            <Head>
        <title> Home - Alura Pages Campanha</title>
      </Head>
            <h1>Alura FAQ</h1>
            <Link href="/" >
                Ir para a home
            </Link>
            <ul>
                {faq.map((FAQ) => (
                    <li key={FAQ.question}>
                        <article>
                            <h2>{FAQ.question}</h2>
                            <p>{FAQ.answer}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    )
}