import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Stats } from "../../components/Stats";
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

  const [dataPokemonColor, setDataPokemonColor] = useState('')

  const getPokemonColor = async () => {
    const pokemonColor = "https://pokeapi.co/api/v2/pokemon-species"
    const res = await fetch(`${pokemonColor}/${pokemon.id}/`)
    const data = await res.json()
    setDataPokemonColor(data.color.name)
  }


  useEffect(() => {
    getPokemonColor()
  }, [])

  return (
    <>
      <S.CardContainer inputColor={dataPokemonColor}>
        <S.CardFront>
          <S.PokemonName>
            {titleCase(pokemon.name)}
          </S.PokemonName>
          <Image src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} width="256" height="256" />
          <S.PokemonId>#{pokemon.id}</S.PokemonId>
        </S.CardFront>
        <S.CardBack inputColor={dataPokemonColor}>
          <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Informações do pokemon</Link>
        </S.CardBack>
      </S.CardContainer>
    </>
  );
};
