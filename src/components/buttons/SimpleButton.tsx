import styles from "@/styles/buttons/SimpleButton.module.scss";
import { Poppins as Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface PropsType {
  text: string;
  handleFunction: () => void;
}

export default function SimpleButton(props: PropsType) {
  const { text, handleFunction } = props;

  return (
    <button
      className={`${styles.button} ${nunito.className}`}
      onClick={handleFunction}
    >
      {text}
    </button>
  );
}
