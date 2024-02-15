import Head from "next/head";
import { Inter } from "next/font/google";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [foo, setFoo] = useState(1);

  // let foo = 1;
  const handleClick = (e) => {
    setFoo((foo) => foo + 1);
    // foo = foo + 1;
  };

  return (
    <>
      <Head>
        <title>indes page</title>
      </Head>
      <Header />
      <h1>{foo}</h1>
      <button href="/about" onClick={handleClick}>
        ボタン
      </button>
      <Main page="index" />
    </>
  );
}
