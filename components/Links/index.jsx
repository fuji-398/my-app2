import { Inter } from "next/font/google";
import styles from "@/components/Links/Links.module.css";

const inter = Inter({ subsets: ["latin"] });

export const Links = () => {
  return (
    <a
      href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>
        Learn <span>-&gt;</span>
      </h2>
      <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
    </a>
  );
};
