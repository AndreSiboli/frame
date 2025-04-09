import styles from "@/styles/pages/home/ShowAll.module.scss";
import Link from "next/link";

export default function ShowAll() {
  return (
    <div className={styles.show}>
      <Link href="/" className={styles.show_link}>
        <span>View all</span>
        <span>
          {"("}01-10{")"}
        </span>
      </Link>
    </div>
  );
}
