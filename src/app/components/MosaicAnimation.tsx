"use client"; // Necessary for Next.js 13 and above

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from '../styles/MosaicAnimation.module.css';


type AnimationSequenceStep = {
  cells?: number[];
  duration: number;
  textChange?: boolean;
  font?: string;
  fontSize?: string;
};

type AnimationSequences = {
  [key: string]: AnimationSequenceStep[];
};

const animationSequences: AnimationSequences = {
  C: [
    { cells: [2, 4, 8], duration: 0.5 },
    { cells: [2, 8], duration: 0.5 },
    { cells: [2, 4], duration: 0.5 },
    { cells: [4, 8], duration: 0.5 },
    { cells: [4], duration: 0.5 },
    { textChange: true, duration: 0.5, font: 'Chakra Petch', fontSize: '10vw' },
    { cells: [4], duration: 0.5 },
    { cells: [4, 8], duration: 0.5 },
    { cells: [2, 4], duration: 0.5 },
    { cells: [2, 8], duration: 0.5 },
    { cells: [2, 4, 8], duration: 0.5 },
    { textChange: true, duration: 0.5, font: 'Tenor Sans', fontSize: '10vw' },
    { cells: [2, 4, 8], duration: 0.5 },
    { cells: [2, 8], duration: 0.5 },
    { cells: [2, 4], duration: 0.5 },
    { cells: [4, 8], duration: 0.5 },
    { cells: [4], duration: 0.5 },
    { textChange: true, duration: 0.5, font: 'Tenali Ramakrishna', fontSize: '15vw' },
  ],
  H: [
    { cells: [5], duration: 0.5 },
    { cells: [1, 5], duration: 0.5 },
    { cells: [1, 5, 9], duration: 0.5 },
    { cells: [1, 5, 7, 9], duration: 0.5 },
    { cells: [1, 3, 5, 7, 9], duration: 0.5 },
    { textChange: true, duration: 0.5, font: 'Chakra Petch', fontSize: '10vw' },
    { cells: [1, 3, 5, 7, 9], duration: 0.5 },
    { cells: [1, 5, 7, 9], duration: 0.5 },
    { cells: [1, 5, 9], duration: 0.5 },
    { cells: [1, 5], duration: 0.5 },
    { cells: [5], duration: 0.5 },
    { textChange: true, duration: 0.5, font: 'Tenor Sans', fontSize: '10vw' },
    { cells: [5], duration: 0.5 },
    { cells: [1, 5], duration: 0.5 },
    { cells: [1, 5, 9], duration: 0.5 },
    { cells: [1, 5, 7, 9], duration: 0.5 },
    { cells: [1, 3, 5, 7, 9], duration: 0.5 },
    { textChange: true, duration: 0.5, font: 'Tenali Ramakrishna', fontSize: '15vw' },
  ],
  O: [
    { cells: [2, 4, 6, 8], duration: 0.5 },
    { cells: [2, 4, 6], duration: 0.5 },
    { cells: [2, 8], duration: 0.5 },
    { cells: [2, 4], duration: 0.5 },
    { cells: [2], duration: 0.5 },
    { textChange: true, duration: 0.5, font: 'Chakra Petch', fontSize: '10vw' },
    { cells: [2], duration: 0.5 },
    { cells: [2, 4], duration: 0.5 },
    { cells: [2, 8], duration: 0.5 },
    { cells: [2, 4, 6], duration: 0.5 },
    { cells: [2, 4, 6, 8], duration: 0.5 },
    { textChange: true, duration: 0.5, font: 'Tenor Sans', fontSize: '10vw' },
    { cells: [2, 4, 6, 8], duration: 0.5 },
    { cells: [2, 4, 6], duration: 0.5 },
    { cells: [2, 8], duration: 0.5 },
    { cells: [2, 4], duration: 0.5 },
    { cells: [2], duration: 0.5 },
    { textChange: true, duration: 0.5, font: 'Tenali Ramakrishna', fontSize: '15vw' },
  ],
  R: [
    { cells: [3, 5], duration: 0.5 },
    { cells: [1, 3], duration: 0.5 },
    { cells: [1, 3, 5], duration: 0.5 },
    { cells: [1, 5, 9], duration: 0.5 },
    { cells: [1, 3, 5, 9], duration: 0.5 },
    { textChange: true, duration: 0.5, font: 'Chakra Petch', fontSize: '10vw' },
    { cells: [1, 3, 5, 9], duration: 0.5 },
    { cells: [1, 5, 9], duration: 0.45 },
    { cells: [1, 3, 5], duration: 0.5 },
    { cells: [1, 3], duration: 0.5 },
    { cells: [2, 4, 8], duration: 0.5 },
    { textChange: true, duration: 0.5, font: 'Tenor Sans', fontSize: '10vw' },
    { cells: [2, 4, 8], duration: 0.5 },
    { cells: [2, 8], duration: 0.55 },
    { cells: [2, 4], duration: 0.5 },
    { cells: [4, 8], duration: 0.5 },
    { cells: [4], duration: 0.5 },
    { textChange: true, duration: 0.5, font: 'Tenali Ramakrishna', fontSize: '15vw' },
  ],
  // A: [
  //   { cells: [2, 4, 6, 7, 9], duration: 0.5},
  //   { cells: [2, 4, 6, 9], duration: 0.5 },
  //   { cells: [2, 4, 9], duration: 0.5 },
  //   { cells: [4, 8], duration: 0.5 },
  //   { cells: [7], duration: 0.5 },
  //   { textChange: true, duration: 0.5, font: 'Chakra Petch' },
  //   { cells: [7], duration: 0.5 },
  //   { cells: [2, 9], duration: 0.5 },
  //   { cells: [2, 4, 9], duration: 0.5 },
  //   { cells: [2, 4, 6, 9], duration: 0.5 },
  //   { cells: [2, 4, 6, 7, 9], duration: 0.5 },
  //   { textChange: true, duration: 0.5, font: 'Tenor Sans' },
  //   { cells: [2, 4, 6, 7, 9], duration: 0.5 },
  //   { cells: [2, 4, 6, 9], duration: 0.5 },
  //   { cells: [2, 4, 9], duration: 0.5 },
  //   { cells: [2, 9], duration: 0.5 },
  //   { cells: [7], duration: 0.5 },
  //   { textChange: true, duration: 0.5, font: 'Tenali Ramakrishna' },
  // ],
  A: [
    { cells: [2, 4, 6, 8], duration: 0.5 },
    { cells: [2, 4, 6], duration: 0.5 },
    { cells: [2, 8], duration: 0.5 },
    { cells: [2, 4], duration: 0.5 },
    { cells: [2], duration: 0.45 },
    { textChange: true, duration: 0.5, font: 'Chakra Petch', fontSize: '10vw' },
    { cells: [2], duration: 0.55 },
    { cells: [2, 4], duration: 0.5 },
    { cells: [2, 8], duration: 0.5 },
    { cells: [2, 4, 6], duration: 0.5 },
    { cells: [2, 4, 6, 8], duration: 0.5 },
    { textChange: true, duration: 0.5, font: 'Tenor Sans', fontSize: '10vw' },
    { cells: [2, 4, 6, 8], duration: 0.5 },
    { cells: [2, 4, 6], duration: 0.5 },
    { cells: [2, 8], duration: 0.5 },
    { cells: [2, 4], duration: 0.5 },
    { cells: [2], duration: 0.5 },
    { textChange: true, duration: 0.5, font: 'Tenali Ramakrishna', fontSize: '15vw' },
  ],
  L: [
    { cells: [3, 5], duration: 0.5 },
    { cells: [1, 3], duration: 0.5 },
    { cells: [1, 3, 5], duration: 0.5 },
    { cells: [1, 5, 9], duration: 0.5 },
    { cells: [1, 3, 5, 9], duration: 0.5 },
    { textChange: true, duration: 0.5, font: 'Chakra Petch', fontSize: '10vw' },
    { cells: [1, 3, 5, 9], duration: 0.5 },
    { cells: [1, 5, 9], duration: 0.45 },
    { cells: [1, 3, 5], duration: 0.5 },
    { cells: [1, 3], duration: 0.5 },
    { cells: [2, 4, 8], duration: 0.5 },
    { textChange: true, duration: 0.5, font: 'Tenor Sans', fontSize: '10vw' },
    { cells: [2, 4, 8], duration: 0.5 },
    { cells: [2, 8], duration: 0.55 },
    { cells: [2, 4], duration: 0.5 },
    { cells: [4, 8], duration: 0.5 },
    { cells: [4], duration: 0.5 },
    { textChange: true, duration: 0.5, font: 'Tenali Ramakrishna', fontSize: '15vw' },
  ],
  U: [
    { cells: [5], duration: 0.5 },
    { cells: [1, 5], duration: 0.5 },
    { cells: [1, 5, 9], duration: 0.5 },
    { cells: [1, 5, 7, 9], duration: 0.45 },
    { cells: [1, 3, 5, 7, 9], duration: 0.5 },
    { textChange: true, duration: 0.5, font: 'Chakra Petch', fontSize: '10vw' },
    { cells: [1, 3, 5, 7, 9], duration: 0.5 },
    { cells: [1, 5, 7, 9], duration: 0.5 },
    { cells: [1, 5, 9], duration: 0.5 },
    { cells: [1, 5], duration: 0.5 },
    { cells: [5], duration: 0.5 },
    { textChange: true, duration: 0.5, font: 'Tenor Sans', fontSize: '10vw' },
    { cells: [5], duration: 0.5 },
    { cells: [1, 5], duration: 0.5 },
    { cells: [1, 5, 9], duration: 0.5 },
    { cells: [1, 5, 7, 9], duration: 0.55 },
    { cells: [1, 3, 5, 7, 9], duration: 0.5 },
    { textChange: true, duration: 0.5, font: 'Tenali Ramakrishna', fontSize: '15vw' },
  ],
  B: [
    { cells: [2, 4, 6, 8], duration: 0.5 },
    { cells: [2, 4, 6], duration: 0.5 },
    { cells: [2, 8], duration: 0.55 },
    { cells: [2, 4], duration: 0.5 },
    { cells: [2], duration: 0.5 },
    { textChange: true, duration: 0.5, font: 'Chakra Petch', fontSize: '10vw' },
    { cells: [2], duration: 0.5 },
    { cells: [2, 4], duration: 0.5 },
    { cells: [2, 8], duration: 0.5 },
    { cells: [2, 4, 6], duration: 0.45 },
    { cells: [2, 4, 6, 8], duration: 0.5 },
    { textChange: true, duration: 0.5, font: 'Tenor Sans', fontSize: '10vw' },
    { cells: [2, 4, 6, 8], duration: 0.5 },
    { cells: [2, 4, 6], duration: 0.5 },
    { cells: [2, 8], duration: 0.5 },
    { cells: [2, 4], duration: 0.5 },
    { cells: [2], duration: 0.5 },
    { textChange: true, duration: 0.5, font: 'Tenali Ramakrishna', fontSize: '15vw'  },
  ],
};

const MosaicAnimation: React.FC = () => {
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const mosaicRefs = useRef<Record<number, (HTMLDivElement | null)[]>>({});

  useEffect(() => {
    lettersRef.current.forEach((letterRef, index) => {
      if (!letterRef) return;

      const char = letterRef.innerText;
      const mosaicCells = mosaicRefs.current[index];
      const sequence = animationSequences[char];

      if (!sequence) return;

      const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0 });

      sequence.forEach(step => {
        if (step.textChange && letterRef) {
          timeline.to(letterRef, {
            opacity: 0,
            duration: 0,
            fontFamily: step.font,
            fontSize: step.fontSize, // Apply font size changes
            onComplete: () => {
              if (letterRef && step.font && step.fontSize) {
                letterRef.style.fontFamily = step.font;
                letterRef.style.fontSize = step.fontSize;
              }
            }
          });
          timeline.to(letterRef, { opacity: 1, duration: step.duration });
        } else if (step.cells && mosaicCells) {
          timeline
            .to(letterRef, { opacity: 0, duration: 0 }, "-=0")
            .to(step.cells.map(cell => mosaicCells[cell]), { backgroundColor: '#fff', duration: step.duration }, "-=0")
            .to(step.cells.map(cell => mosaicCells[cell]), { backgroundColor: 'transparent', duration: 0 }, "-=0");
        }
      });

      timeline.to(letterRef, { opacity: 1, duration: 0.5 }, "-=0");
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        {[...'CHORACLUB'].map((char, index) => (
          <div key={index} className={styles.letterContainer}>
            <span
              ref={el => {
                lettersRef.current[index] = el;
              }}
              className={styles.letter}
            >
              {char}
            </span>
            <div className={styles.mosaicGrid}>
              {Array.from({ length: 9 }).map((_, cellIndex) => (
                <div
                  key={cellIndex}
                  ref={el => {
                    if (!mosaicRefs.current[index]) {
                      mosaicRefs.current[index] = [];
                    }
                    mosaicRefs.current[index][cellIndex] = el;
                  }}
                  className={styles.mosaicCell}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MosaicAnimation;

