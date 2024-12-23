"use client"
import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/FAQ.module.css';
import { HiOutlinePlus } from "react-icons/hi2";
import { RiArrowRightDownLine } from "react-icons/ri";
import Footer from './Footer';

const questions = [
  {
    "question": "What is Chora Club?",
    "answer": "Chora Club is a platform designed to facilitate the swift integration of new users into the Web3 ecosystem. It connects users with experienced Delegates, offers personalized learning sessions, and provides a space to explore and engage with DAOS."
  },
  {
    "question": "How can I join Chora Club as a user?",
    "answer": "Joining Chora Club as a user is easy! Simply click on the \"Join Chora Club\" button on our homepage, follow the registration process, and start your Web3 journey."
  },
  {
    "question": "What benefits do users get from Chora Club?",
    "answer": "Chora Club users enjoy personalized learning sessions with Delegates, access to a diverse range of DAOS, and the opportunity to actively participate in live office hours. It's a community-driven platform that empowers users in their Web3 exploration."
  },
  {
    "question": "What is the role of Delegates in Chora Club?",
    "answer": "Delegates are active participants who contribute their time and expertise to guide and educate new users in the Web3 ecosystem. They host office hours, engage with new users, and play a crucial role in fostering connections within the community."
  },
  {
    "question": "How can I become a Delegate on Chora Club?",
    "answer": "If you are passionate about Web3 and want to share your knowledge, becoming a Delegate is easy. Click on the \"Become a Delegate\" link, follow the application process, and start making a positive Impact in the Web3 community."
  },
  {
    "question": "What awaits me as a Delegate on Chora Club?",
    "answer": "Becoming a Delegate at Chora Club opens doors to exciting possibilities. Gain on-chain recognition for your educational contributions, host Delegate Office Hours, and connect with a diverse community of users. Your expertise is not only valued but also actively contributes to the expansion of the Web3 ecosystem."
  },
  {
    "question": "Is there a cost to join Chora Club?",
    "answer": "Joining Chora Club is completely free - and will always remain so. We've crafted this platform as a public good, ensuring accessibility for everyone interested in Web3 exploration. Our commitment is to provide a welcoming space where knowledge-sharing and collaboration thrive."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAccordion = (index:any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        if (activeIndex === index) {
          ref.style.maxHeight = `${ref.scrollHeight}px`;
          ref.style.opacity = '1';
        } else {
          ref.style.maxHeight = '0px';
          ref.style.opacity = '0';
        }
      }
    });
  }, [activeIndex]);
  useEffect(() => {
      const handleWheel = (e: WheelEvent) => {
        if (window.scrollY < window.innerHeight) {
          e.preventDefault();
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }
      };
  
      window.addEventListener("wheel", handleWheel, { passive: false });
  
      return () => {
        window.removeEventListener("wheel", handleWheel);
      };
    }, []);

  return (
    <>
    <section className={styles.faqSection}>
      <div className={styles.headingMain}>

      <h2 className={styles.heading}>FAQ<span>s</span></h2>
      <RiArrowRightDownLine className={styles.headingIcon}/>
      </div>
      <div className={styles.line}></div>
      {questions.map((item, index) => (
        <div 
          key={index} 
          className={`${styles.accordionItem} ${activeIndex === index ? styles.active : ''}`}
        >
          <button 
            onClick={() => toggleAccordion(index)}
            className={`${styles.accordionButton} ${activeIndex === index ? styles.active : ''}`}
          >
            {item.question}
            <span className={styles.icon}>
              {activeIndex === index ? <HiOutlinePlus className={styles.closeIcon}/> : <HiOutlinePlus className={styles.closeIcon}/>}
            </span>
          </button>
          {activeIndex === index && (
            <div className={styles.accordionContent}  ref={(el) => {
              contentRefs.current[index] = el;
            }}>
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </section>
     <Footer />
     </>
  );
}