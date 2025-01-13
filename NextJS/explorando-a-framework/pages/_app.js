import Head from "next/head"
import GlobalStyle from "../src/theme/GlobalStyle"

function MyApp({ Component, pageProps }) {
    return (<>
        <Head>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-2QZDPX#BLK"></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-2QZDPX3BLK');
        `
                }}
            />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
    </>
    )
}
export default MyApp