"use client";

import { useEffect, useRef } from "react";
import styles from "@/styles/pages/home/Scrollable.module.scss";

import Container from "@/components/layout/Container";
import Title from "@/components/pages/home/Title";
import Hero from "@/components/pages/home/Hero";
import Portraits from "@/components/pages/home/Portraits";
import ShowAll from "./ShowAll";

export default function Scrollable() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  function resize() {
    if (!container.current) return;
    container.current.style.setProperty("--final-translate-x", `0px`);

    const pageWidth = 1350;
    const scrollWidth = container.current.scrollWidth;
    const viewportWidth = window.innerWidth; // Get the screen width
    const gapSizes = viewportWidth - pageWidth;
    const calculatedGaps = gapSizes >= 48 ? gapSizes / 2 : 48; // To fit the main container
    const finalTranslateX = scrollWidth - viewportWidth + calculatedGaps;

    container.current.style.setProperty(
      "--final-translate-x",
      `-${finalTranslateX}px`
    );
  }

  return (
    <div className={styles.slide} ref={container}>
      <Container style={{ maxWidth: "1350px" }}>
        <div className={styles.slide_container}>
          <div className={styles.slide_wrapper}>
            <Hero />
            <div className={styles.wrapper_portraits}>
              <Portraits />
              <ShowAll />
            </div>
          </div>
          <Title />
        </div>
      </Container>
    </div>
  );
}
