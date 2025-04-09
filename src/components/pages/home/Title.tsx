import { CSSProperties } from "react";
import styles from "@/styles/pages/home/Title.module.scss";

export default function Title() {
  return (
    <div className={styles.title}>
      <p>
        <span style={{ "--speed": 1 } as CSSProperties}>F</span>
        <span style={{ "--speed": 2 } as CSSProperties}>R</span>
        <span style={{ "--speed": 3 } as CSSProperties}>A</span>
        <span style={{ "--speed": 4 } as CSSProperties}>M</span>
        <span style={{ "--speed": 5 } as CSSProperties}>E</span>
      </p>
    </div>
  );
}
