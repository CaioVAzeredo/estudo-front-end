import styled from "styled-components"
import ItemNavegacao from "./ItemNavegacao"

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`
const DoisElementos = styled.div`
    display: flex;
`

const BarraLateral = () => {
    return (<aside>
        <nav>
            <DoisElementos>
                <ListaEstilizada>
                    <ItemNavegacao
                        iconeAtivo="/icones/home-ativo.png"
                        iconeInativo="/icones/home-inativo.png"
                        ativo={true}
                    >
                        Início
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo="/icones/mais-vistas-inativo.png"
                        iconeInativo="/icones/mais-vistas-inativo.png"
                        ativo={false}
                    >
                        Mais vistas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo="/icones/mais-curtidas-inativo.png"
                        iconeInativo="/icones/mais-curtidas-inativo.png"
                        ativo={false}
                    >
                        Mais curtidas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo="/icones/novas-inativo.png"
                        iconeInativo="/icones/novas-inativo.png"
                        ativo={false}
                    >
                        Novas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo="/icones/surpreenda-me-inativo.png"
                        iconeInativo="/icones/surpreenda-me-inativo.png"
                        ativo={false}
                    >
                        Surpreenda-me
                    </ItemNavegacao>
                    <Banner/>
                </ListaEstilizada>
            </DoisElementos>
        </nav>
    </aside>)
}

export default BarraLateral