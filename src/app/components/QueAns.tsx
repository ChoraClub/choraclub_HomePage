import React from 'react'
import styles from '../styles/QueAns.module.css'
import { FaAngleDown } from "react-icons/fa";
import Footer from './Footer';



const questions = [
      {
        "question": "What is Chora Club?",
        "answer": "Chora Club is a platform designed to facilitate the swift integration of new users into the Web3 ecosystem. It connects users with experienced Delegates, offers personalized learning sessions, and provides a space to explore and engage with DAOS."
      },
      {
        "question": "How can I join Chora Club as a user?",
        "answer": "Joining Chora Club as a user is easy! Simply click on the &quot;Join Chora Club&quot; button on our homepage, follow the registration process, and start your Web3 journey."
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
        "answer": "If you are passionate about Web3 and want to share your knowledge, becoming a Delegate is easy. Click on the &quot;Become a Delegate&quot;	 link, follow the application process, and start making a positive Impact in the Web3 community."
      },
      {
        "question": "What awaits me as a Delegate on Chora Club?What is the largest ocean on Earth?",
        "answer": "Becoming a Delegate at Chora Club opens doors to exciting possibilities. Gain on-chain recognition for your educational contributions, host Delegate Office Hours, and connect with a diverse community of users. Your expertise is not only valued but also actively contributes to the expansion of the Web3 ecosystem."
      },
      {
        "question": "Is there a cost to join Chora Club?",
        "answer": "Joining Chora Club is completely free - and will always remain so. We've crafted this platform as a public good, ensuring accessibility for everyone interested in Web3 exploration. Our commitment is to provide a welcoming space where knowledge- sharing and collaboration thrive."
      }
    ]
  

const QueAns = () => {
  return (
    <div className={styles.main}>
          <div className={styles.top1}></div>
          <div className={styles.center}></div>


        <div className={styles.list}>
            {questions.map((item, index) => (
                <div key={index} className={styles.item}>
                  <div className={styles.group}>
                    <p>{item.question}</p>
                    <p className={styles.answer}>{item.answer}</p>
                  </div>
                    <p className={styles.arrow}><FaAngleDown /></p>
                </div>
            ))}
        </div>
      <Footer />
    </div>
  )
}

export default QueAns
