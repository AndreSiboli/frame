import styles from "@/styles/navbar/Navbar.module.scss";

import Container from "@/components/layout/Container";
import SocialMedia from "@/components/links/SocialMedia";
import Logo from "../layout/Logo";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <Container style={{ maxWidth: "1350px" }}>
        <div className={styles.header_container}>
          <div className={styles.header_logo}>
            <Logo />
          </div>
          <div className={styles.header_social}>
            <SocialMedia />
          </div>
        </div>
      </Container>
    </header>
  );
}
