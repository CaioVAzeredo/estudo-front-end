import styled from "styled-components"
import search from '../../assets/CampoTexto/search.png'

const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
`

const CampotextoEstilizado = styled.input`
    width: 566px;
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`
const IconeLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    height: 36px;
`


const CampoTexto = (props) => {
    return (<ContainerEstilizado>
        <CampotextoEstilizado type="text"
            placeholder="O que você procura?" {...props} />
        <IconeLupa src={search} alt="icone lupa" />
    </ContainerEstilizado>
    )
}
export default CampoTexto