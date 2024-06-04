import Image from 'next/image'
import React from 'react'
import img1 from '../../../public/Image (49) 3.svg'
import img2 from '../../../public/Image (50) 3.svg'
import styles from '../styles/join.module.css'


const Join = () => {
  return (
  <div className={styles.joinpage}>
    <div className={styles.bottom2}></div>
    <div className={styles.bottom1}></div>
    <div className={styles.top1}></div>

    <div className={styles.main}>
        <div className={styles.section}>
            <Image src={img1} alt='' className={styles.image}></Image>
            <h1 className={styles.heading}>Eager to Connect in Web3?</h1>
            <p className={styles.para}>Chora Club is your gateway to tailored learning, community engagement, and endless opportunities</p>
            <button className={styles.button}>Start Your Journey</button>
        </div>
        <div className={styles.section}>
            <Image src={img2} alt='' className={styles.image}></Image>
            <h1 className={styles.heading}>Ready to Shape the Future of Web3?</h1>
            <p className={styles.para}>Your expertise matters in guiding the next wave of web3 enthusiasts</p>
            <button className={styles.button}>Join as a Delegate</button>
        </div>
    </div>
   </div>

  )
}

export default Join
