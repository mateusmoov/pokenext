import Image from "next/image"
import styled from "styled-components"

export const CardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: pink;
padding: 20px;
padding: 60px;
margin: 0 30px 30px 0;
border-radius: 20px;
font-family: Montserrat ;
`

export const PokemonId = styled.div`
background-color: black;
opacity: 50%;
color: white;
border-radius: 10px;
padding: 2px 15px;
font-family:Montserrat;
font-weight: lighter ;
`

export const PokemonName = styled.h1`
font-family: Montserrat;
font-size: 2em;
font-weight: bold;
color: white;
`