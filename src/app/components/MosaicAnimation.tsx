"use client"; 

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from '../styles/MosaicAnimation.module.css';

import C1 from '../../../public/svgs/c1.svg';
import C2 from '../../../public/svgs/c2.svg';
import C3 from '../../../public/svgs/C.svg';
import C4 from '../../../public/svgs/c4.svg';

import H1 from '../../../public/svgs/h1.svg';
import H2 from '../../../public/svgs/h2.svg';
import H3 from '../../../public/svgs/H.svg';
import H4 from '../../../public/svgs/h4.svg';

import O1 from '../../../public/svgs/o1.svg';
import O2 from '../../../public/svgs/o2.svg';
import O3 from '../../../public/svgs/O.svg';
import O4 from '../../../public/svgs/o4.svg';

import R1 from '../../../public/svgs/r1.svg';
import R2 from '../../../public/svgs/r2.svg';
import R3 from '../../../public/svgs/R.svg';
import R4 from '../../../public/svgs/r4.svg';

import A1 from '../../../public/svgs/a1.svg';
import A2 from '../../../public/svgs/a2.svg';
import A3 from '../../../public/svgs/A.svg';
import A4 from '../../../public/svgs/a4.svg';

import L1 from '../../../public/svgs/l1.svg';
import L2 from '../../../public/svgs/l2.svg';
import L3 from '../../../public/svgs/L.svg';
import L4 from '../../../public/svgs/l4.svg';

import U1 from '../../../public/svgs/u1.svg';
import U2 from '../../../public/svgs/u2.svg';
import U3 from '../../../public/svgs/U.svg';
import U4 from '../../../public/svgs/u4.svg';

import B1 from '../../../public/svgs/b1.svg';
import B2 from '../../../public/svgs/b2.svg';
import B3 from '../../../public/svgs/B.svg';
import B4 from '../../../public/svgs/b4.svg';

type CharType2 = 'C' | 'H' | 'O' | 'R' | 'A' | 'L' | 'U' | 'B';

const svgPaths: Record<CharType, { src: string }[]> = {
  C: [C1, C2, C3, C4],
  H: [H1, H2, H3, H4],
  O: [O1, O2, O3, O4],
  R: [R1, R2, R3, R4],
  A: [A1, A2, A3, A4],
  L: [L1, L2, L3, L4],
  U: [U1, U2, U3, U4],
  B: [B1, B2, B3, B4],
};

const animationSequences = {
  C: [0, 1, 2, 3],
  H: [0, 1, 2, 3],
  O: [0, 1, 2, 3],
  R: [0, 1, 2, 3],
  A: [0, 1, 2, 3],
  L: [0, 1, 2, 3],
  U: [0, 1, 2, 3],
  B: [0, 1, 2, 3],
};
type CharType = keyof typeof animationSequences;

const MosaicAnimation: React.FC = () => {
  const lettersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    lettersRef.current.forEach((letterRef, index) => {
      if (!letterRef) return;

      const char = letterRef.dataset.char as CharType;
      if (!char || !animationSequences[char]) return;

      const sequence = animationSequences[char];
      const svgs = svgPaths[char];

      const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0 });

      sequence.forEach(stepIndex => {
        timeline.to(letterRef, {
          duration: 0.1,
          opacity: 0,
          onComplete: () => {
            if (letterRef) {
              letterRef.style.backgroundImage = `url(${svgs[stepIndex].src})`;
            }
          }
        });
        timeline.to(letterRef, { opacity: 1, duration: 0.5 }, '-=0.1' );
      });
      timeline.delay(index * 0.3 + 0.2); // stagger animation start for each letter

    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        {[...'CHORACLUB'].map((char, index) => (
          <div key={index} className={styles.letterContainer}>
            <div
              data-char={char}
              ref={el => {
                lettersRef.current[index] = el;
              }}
              className={styles.letter}
              style={{ backgroundImage: `url(${svgPaths[char as CharType2][0].src})` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MosaicAnimation;