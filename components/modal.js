import React from 'react'
import styles from '../styles/Home.module.css'

export const Popup = ({ text, closePopup }) => {
  return (
    <div className={styles['popup-container']}>
      <div className={styles['popup-body']}>
        <h1>{text}</h1>

        <button onClick={closePopup}>Close X</button>
      </div>
    </div>
  )
}
