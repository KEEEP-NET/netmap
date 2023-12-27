import styles from "./page.module.css";
import { Poppins } from "next/font/google";

import Image from "next/image";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export default function Lobby() {
  return (
    <div className={styles.lobby}>
      <header>
        <div className={styles.logo_area}>
          <Image
            className={styles.logo}
            src="/keeep.png"
            alt="logo"
            width={80}
            height={80}
          />
          <h1 className={poppins.className}>netmap</h1>
        </div>
        <div className={styles.header_menu}>
          <button>로그인</button>
        </div>
      </header>
      <main></main>
    </div>
  );
}
