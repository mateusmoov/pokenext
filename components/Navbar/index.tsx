import Link from "next/link";
import Image from "next/image";
import * as S from "./styles";

export const Navbar = () => {
  return (
    <S.Nav>
      <S.Logo>
        <Image
          src="/images/pokeball.png"
          width="30"
          height="30"
          alt="PokeNext"
        />
        <h1>PokeNext</h1>
      </S.Logo>
      <S.Ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>Sobre</a>
          </Link>
        </li>
      </S.Ul>
    </S.Nav>
  );
};
