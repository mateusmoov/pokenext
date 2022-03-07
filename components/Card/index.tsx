import Image from "next/image";
import * as S from "./styles";

interface PokeResults {
  id: number;
  name: string;
  url: string;
}

interface Props {
  pokemon: PokeResults;
}

const titleCase = (string: string) => {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}


export const Card = ({ pokemon }: Props) => {

  return (
    <>
      <S.CardContainer>
        <S.PokemonName>
          {titleCase(pokemon.name)}
        </S.PokemonName>
        <Image src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} width="256" height="256" />
        <S.PokemonId>#{pokemon.id}</S.PokemonId>
      </S.CardContainer>
    </>
  );
};
