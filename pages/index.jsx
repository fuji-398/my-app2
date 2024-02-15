import Head from "next/head";
import { Inter } from "next/font/google";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { useCallback, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [count, setCount] = useState(1);

  // let count = 1;
  const handleClick = useCallback(() => {
    console.log(count);
    if (count < 10) {
      setCount((count) => count + 1);
    }
  }, [count]);

  useEffect(() => {
    console.log("A");
    document.body.style.backgroundColor = "lightblue";
    return () => {
      console.log("B");

      document.body.style.backgroundColor = "";
    };
  }, [count]);

  return (
    <>
      <Head>
        <title>indes page</title>
      </Head>
      <Header />
      <h1>{count}</h1>
      <button href="/about" onClick={handleClick}>
        ボタン
      </button>
      <Main page="index" />
    </>
  );
}
