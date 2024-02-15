import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/components/Main/Main.module.css";
import { Footer } from "@/components/Footer";
import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";

const inter = Inter({ subsets: ["latin"] });

export function Main(props) {
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>pages/index.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <Headline h2={props.page}>
          code={<code className={styles.code}>pages/{props.page}.js</code>}{" "}
        </Headline>

        <Links />

        <Footer />
      </div>
    </main>
  );
}
