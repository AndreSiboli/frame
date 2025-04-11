import "@/styles/pages/globals-variables.scss";
import styles from "@/styles/pages/home/Hero.module.scss";
import Link from "next/link";
import { PiArrowRight } from "react-icons/pi";
import { Handlee } from "next/font/google";

const handlee = Handlee({ subsets: ["latin"], weight: ["400"] });

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_info}>
        <div className={styles.info_title}>
          <h1>Freeze the Moment</h1>
        </div>
        <div className={styles.info_text}>
          <p>
            Each click a poem, each frame a memory stitched in light and shadow.
          </p>
        </div>
        <nav className={styles.info_link}>
          <Link href="/">
            See more <PiArrowRight />
          </Link>
        </nav>
      </div>
      <div className={`${styles.hero_scroll} ${handlee.className}`}>
        <p>Scroll</p>
      </div>
    </div>
  );
}
