import Image from "next/image"
import styled from "styled-components"

interface Props {
    inputColor: string;
}

export const CardContainer = styled.div<Props>`
display: flex;
flex-direction: column;
align-items: center;
background: linear-gradient(180deg,rgba(0, 0, 0, 0.3)  0%, rgba(255, 255, 255, 0.3) 100%), ${(props) => props.inputColor};
padding: 60px;
margin: 0 30px 30px 0;
border-radius: 20px;
font-family: Montserrat ;
`

export const PokemonId = styled.div`
font-family:Montserrat;
font-weight: lighter ;
color: white;
background-color: black;
opacity: 50%;
border-radius: 10px;
padding: 2px 15px;
margin-bottom: 5px;
`

export const PokemonName = styled.h1`
font-family: Montserrat;
font-weight: bold;
color: white;
font-size: 2em;
margin-bottom: 5px;
`