import { Card } from "../components/Card";
import { Input } from "../components/Input";
import BasicLayout from "../layout/Basic";
import * as S from './styles'

interface PokeResults {
  id: number;
  name: string;
  url: string;
}

interface Props {
  pokemons: PokeResults[];
}

export const getStaticProps = async () => {
  const maxPokemons = 60;
  const api = "https://pokeapi.co/api/v2/pokemon";

  const res = await fetch(`${api}?limit=${maxPokemons}`);
  const data = await res.json();

  data.results.forEach((item: PokeResults, index: number) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
};

const Home = ({ pokemons }: Props) => {
  return (
    <BasicLayout>
      <div>
        <S.PokemonContainer>
          {pokemons.map((pokemon: PokeResults) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </S.PokemonContainer>
      </div>
    </BasicLayout>
  );
};

export default Home;
