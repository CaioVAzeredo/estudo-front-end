import Link from "next/link"

export default function Page404() {
    return (
        <div>
            <h1>Você se perdeu e caiu na pagina 404</h1>
            <Link href="/" >
                Ir para a home
            </Link>
        </div>
    )
}