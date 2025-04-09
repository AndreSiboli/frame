import Scrollable from "@/components/pages/home/Scrollable";
import styles from "@/styles/pages/page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <Scrollable />
    </div>
  );
}
