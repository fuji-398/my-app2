import { Inter } from "next/font/google";
import styles from "./Headline.module.css";

const inter = Inter({ subsets: ["latin"] });

export function Headline(props) {
  return (
    <div>
      <a
        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          {props.h2} page <span>-&gt;</span>
        </h2>
        <p>
          Find in-depth information about Next.js features and&nbsp;API.
          {props.children}
        </p>
      </a>
    </div>
  );
}
