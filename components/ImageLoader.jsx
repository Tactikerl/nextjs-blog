import React from 'react'
import styles from '../styles/Home.module.css'

import image1 from '../public/images/barna.png'
import image2 from '../public/images/brev.png'
import image3 from '../public/images/dansbrakka.png'
import image4 from '../public/images/dansmengde.png'
import image5 from '../public/images/Instrumentbytte.png'
import image6 from '../public/images/kaia.png'
import image7 from '../public/images/medlemliste.png'
import image8 from '../public/images/park.png'
import image9 from '../public/images/poserer.png'
import image10 from '../public/images/radiospilling.png'
import image11 from '../public/images/Snappy.png'
import image12 from '../public/images/snappyinthewild.png'
import image13 from '../public/images/snappyjenter.png'
import image14 from '../public/images/snappypose.png'
import image15 from '../public/images/snappypose2.png'
import image16 from '../public/images/snappypractice.png'
import image17 from '../public/images/Sture.png'
import image18 from '../public/images/stureogodd.png'
import image19 from '../public/images/tormod.png'
import image20 from '../public/images/venner.png'

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
]

const ImageLoader = ({ numberOfImages }) => {
  const getRandomImages = () => {
    const shuffled = [...images].sort(() => 0.5 - Math.random())
    console.log(shuffled)
    return shuffled.slice(0, numberOfImages)
  }

  const randomImages = getRandomImages()
  return (
    <div className={styles['mexicanHedge']}>
      <div className={styles['mexicanWall']}>
        {randomImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`RandomImage-${index}`}
            className={styles['mexicanImage']}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageLoader
