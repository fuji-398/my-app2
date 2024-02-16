import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/components/Header/Header.module.css";

const inter = Inter({ subsets: ["latin"] });

const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/about", label: "about" },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href}>
            <p className={styles.anchor}>{item.label}</p>
          </Link>
        );
      })}
    </header>
  );
};
