import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/components/Header/Header.module.css";

const inter = Inter({ subsets: ["latin"] });

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <p className={styles.anchor}>Index</p>
      </Link>
      <Link href="/about">
        <p>About</p>
      </Link>
    </header>
  );
}
