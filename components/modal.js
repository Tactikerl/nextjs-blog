import React from 'react'
import styles from '../styles/Home.module.css'

export const Popup = ({ image, closePopup }) => {
  return (
    <div className={styles['popup-container']}>
      <div className={styles['popup-body']}>
        <div className={styles['title-container']}>
          <h3 className={styles['popup-title']}>{image.title}</h3>
        </div>
        <div className={styles['button-container']}>
          <button className={styles['popup-close']} onClick={closePopup}>
            Close X
          </button>
        </div>
        <div className={styles['img-container']}>
          <img
            className={styles['popup-img']}
            src={image.src}
            alt={image.alt}
          />
          <p className={styles['popup-text']}>{image.txt}</p>
        </div>
        <div className={styles['text-container']}></div>
      </div>
    </div>
  )
}
