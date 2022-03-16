import Image from "next/image";
import styled from "styled-components";

interface Props {
  inputColor: string;
}

export const CardContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(255, 255, 255, 0.3) 100%
    ),
    ${(props) => props.inputColor};
  width: 350px;
  height: 400px;
  margin: 0 30px 30px 0;
  border-radius: 20px;
  font-family: Montserrat;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.4s cubic-bezier(0.42, 0, 0.54, 1.68);

  &:hover {
    transform: rotateY(180deg);
  }
`;

export const PokemonId = styled.div`
  font-family: Montserrat;
  font-weight: lighter;
  color: white;
  background-color: black;
  opacity: 50%;
  border-radius: 10px;
  padding: 2px 15px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const PokemonName = styled.h1`
  font-family: Montserrat;
  font-weight: bold;
  color: white;
  font-size: 2em;
  margin-top: 15px;
  margin-bottom: 5px;
`;

export const StatsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

export const CardFront = styled.div`
  text-align: center;
`;

export const CardBack = styled.div<Props>`
  width: 100%;
  height: 100%;
  position: absolute;
  transform: rotateY(180deg);
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(255, 255, 255, 0.3) 100%
    ),
    ${(props) => props.inputColor};
  backface-visibility: hidden;
  border-radius: 10px;
`;
