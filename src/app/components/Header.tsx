import React from "react";
import styles from "../styles/header.module.css";

function Header() {
  return (
    <div>
      <div className={styles.headingParent}>
        <div className={styles.logo}>
          <svg
            width="104"
            height="103"
            viewBox="0 0 104 103"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12.0109"
              cy="70.4059"
              r="9.27487"
              transform="rotate(-20.5106 12.0109 70.4059)"
              fill="black"
            />
            <circle
              cx="77.9249"
              cy="45.7472"
              r="9.27487"
              transform="rotate(-20.5106 77.9249 45.7472)"
              fill="#D9D9D9"
            />
            <circle
              cx="57.3278"
              cy="90.9574"
              r="9.27487"
              transform="rotate(-110.511 57.3278 90.9574)"
              fill="black"
            />
            <circle
              cx="32.6715"
              cy="25.0448"
              r="9.27487"
              transform="rotate(-110.511 32.6715 25.0448)"
              fill="#D9D9D9"
            />
            <circle
              cx="30.4141"
              cy="90.0663"
              r="9.27487"
              transform="rotate(-65.5106 30.4141 90.0663)"
              fill="black"
            />
            <circle
              cx="59.5859"
              cy="26.0253"
              r="9.27487"
              transform="rotate(-65.5106 59.5859 26.0253)"
              fill="#D9D9D9"
            />
            <circle
              cx="76.994"
              cy="72.5532"
              r="9.27487"
              transform="rotate(-155.511 76.994 72.5532)"
              fill="black"
            />
            <circle
              cx="12.9511"
              cy="43.3823"
              r="9.27487"
              transform="rotate(-155.511 12.9511 43.3823)"
              fill="black"
            />
            <circle
              cx="88.8291"
              cy="16.8915"
              r="9.27487"
              transform="rotate(-20.0397 88.8291 16.8915)"
              fill="#ff8a00"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M89.3834 58.8832C89.1627 70.1603 84.6642 80.932 76.799 89.0167L63.5082 76.0866C65.4843 74.0551 67.1583 71.6623 68.4219 68.9477C74.4608 55.9737 68.8388 40.5606 55.8648 34.5217C46.7154 30.263 36.353 31.8035 28.9207 37.632L17.4655 23.0491C26.3354 16.0815 37.522 12.7456 48.7593 13.7169C59.9967 14.6883 70.4449 19.8942 77.9877 28.2804C85.5305 36.6666 89.6041 47.6061 89.3834 58.8832Z"
              fill="#004DFF"
            />
          </svg>
          <div>Chora Club</div>
        </div>
        <div className={styles.launchappbtn}>Launch App</div>
      </div>
    </div>
  );
}

export default Header;
