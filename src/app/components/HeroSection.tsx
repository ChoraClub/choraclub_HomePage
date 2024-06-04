import React from "react";
import styles from "../styles/herosection.module.css";

function HeroSection() {
  return (
    <div className={styles.heroSectionParent}>
      <div className={styles.rectangle}>
        <p className={styles.tagline}>
          <span className={styles.taglineword}>
            Discover
            <span className={styles.headingDot}>.</span>
          </span>
          <span className={`${styles.taglineword} ${styles.hiddentextopacity}`}>
            Learn
            <span className={styles.headingDot}>.</span>
          </span>
          <span className={`${styles.taglineword} ${styles.hiddentextopacity}`}>
            Engage
            <span className={styles.headingDot}>.</span>
          </span>
        </p>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle3}></div>
        <div className={styles.ellipse}></div>
      </div>
    </div>
  );
}

export default HeroSection;
