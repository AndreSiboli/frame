import styles from "@/styles/layout/Footer.module.scss";
import Container from "./Container";
import Logo from "./Logo";
import SocialMedia from "../links/SocialMedia";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer_container}>
          <div className={styles.footer_logo}>
            <Logo />
          </div>

          <nav className={styles.footer_media}>
            <SocialMedia />
          </nav>
          <div className={styles.footer_rights}>
            <p>Copyright &copy; André Siboli {new Date().getFullYear()}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
