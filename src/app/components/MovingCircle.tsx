'use client'
import React, { useEffect, useState } from 'react'
import styles from "../styles/herosection.module.css"

function MovingCircle() {


    return (
        <div className="moving-circles">
            <div className={`${styles.circle} ${styles.circle2}`}></div>
            <div className={`${styles.circle} ${styles.circle1}`}></div>
            <div className={`${styles.circle} ${styles.circle4}`}></div>
            <div className={`${styles.circle} ${styles.circle3}`}></div>
        </div>
    )
}

export default MovingCircle