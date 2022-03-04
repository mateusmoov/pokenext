import * as S from "./styles";

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <S.Footer>
      <span>PokeNext</span> &copy; {year}
    </S.Footer>
  );
};
