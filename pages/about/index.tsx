import React from "react";
import Image from "next/image";
import * as S from "./styles";

const About = () => {
  return (
    <>
      <S.AboutContainer>
        <S.Title>Sobre nós</S.Title>
        <S.Subtitle>
          Olha, somos uma companhia séria que junta dados de Pokemons de todos
          os tipos, nosso nome é IBGPOKE, vamos de casa em casa para perguntar
          quantos pokemons a população brasileira, tem no seu domicílio.
        </S.Subtitle>
        <div>
          <Image src="/images/professor.jpg" width="728" height="410" />
        </div>
        <S.Subtitle> Pra no final eu comer o cu de quem tá lendo.</S.Subtitle>
      </S.AboutContainer>
    </>
  );
};

export default About;
