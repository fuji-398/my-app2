import { Inter } from "next/font/google";
import styles from "@/components/Footer/Footer.module.css";

const inter = Inter({ subsets: ["latin"] });

export function Footer({ items, handleReduce }) {
  return (
    <div>
      <button onClick={handleReduce}>減らす</button>
      {items.map((item) => {
        return (
          <a
            key={item.href}
            href={item.href}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              {item.title} <span>-&gt;</span>
            </h2>
            <p>{item.description}</p>
          </a>
        );
      })}
    </div>
  );
}
