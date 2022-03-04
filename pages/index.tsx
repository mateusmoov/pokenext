import { Card } from "../components/Card";
import BasicLayout from "../layout/Basic";
import styled from "styled-components";

interface PokeResults {
  id: number;
  name: string;
  url: string;
}

interface Props {
  pokemons: PokeResults[];
}

export const getStaticProps = async () => {
  const maxPokemons = 251;
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
        <Card />
        {/* <h1>
          Poke<span style={{ color: "red" }}>Next</span>
        </h1>
        <ul>
          {pokemons.map((pokemon: PokeResults) => (
            <li key={pokemon.id}>{pokemon.name}</li>
          ))}
        </ul> */}
      </div>
    </BasicLayout>
  );
};

export default Home;
