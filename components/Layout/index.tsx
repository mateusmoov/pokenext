import React from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import Head from "next/head";
import * as S from "./styles";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>PokeNext</title>
      </Head>
      <Navbar />
      <S.MainContainer>{children}</S.MainContainer>
      <Footer />
    </>
  );
};
