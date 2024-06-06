import React, { RefObject } from "react";
import styles from "../styles/header.module.css";
import Image from "next/image";

interface HeaderProps {
  headerRef: RefObject<HTMLDivElement>;
}
function Header({ headerRef }: HeaderProps) {

  const handleLaunchAppClick = () => {
    window.open("https://app.chora.club/")
  }
  return (
    <div className={styles.headingParent} ref={headerRef}>
      <div className={styles.logo}>
        <Image
          src="/assets/img/logo.png"
          className={styles.logoImage}
          width={186}
          height={56}
          alt="Chora Club Logo"
        />
      </div>
      <div className={styles.launchappbtn} onClick={handleLaunchAppClick}>Launch App</div>
    </div>
  );
}

export default Header;
