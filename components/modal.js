import React from 'react'
import styles from '../styles/Home.module.css'

export const Popup = ({ image, closePopup }) => {
  return (
    <div className={styles['popup-container']}>
      <button className={styles['popup-close']} onClick={closePopup}>
        Close X
      </button>
      <h3 className={styles['popup-title']}>{image.title}</h3>
      <div className={styles['popup-body']}>
        <div>
          <img
            className={styles['popup-img']}
            src={image.src}
            alt={image.alt}
          />
        </div>
        <div>
          <p className={styles['popup-text']}>{image.txt}</p>
        </div>
      </div>
    </div>
  )
}
