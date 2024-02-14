import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export function Footer() {
  return (
    <div>
      <a
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          Templates <span>-&gt;</span>
        </h2>
        <p>Discover and deploy boilerplate example Next.js&nbsp;projects.</p>
      </a>

      <a
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          Deploy <span>-&gt;</span>
        </h2>
        <p>
          Instantly deploy your Next.js site to a shareable URL
          with&nbsp;Vercel.
        </p>
      </a>
    </div>
  );
}
