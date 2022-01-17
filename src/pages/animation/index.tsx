import type { NextPage } from 'next'
import Image from 'next/image'
import rcImage from '@/assets/images/R-C.png'
import styles from './index.module.css'

const Animation: NextPage<any> = () => {
  return (
    <div className={styles.animation}>
      <div className={styles.turnOutRight}>
        <p>turnOutRight</p>
        <Image src={rcImage} className={styles.image} />
      </div>
      <div className={styles.zoomOutUp}>
        <p>zoomOutUp</p>
        <Image src={rcImage} className={styles.image} />
      </div>
      <div className={styles.rollOutRight}>
        <p>rollOutRight</p>
        <Image src={rcImage} className={styles.image} />
      </div>
      <div className={styles.hingeRight}>
        <p>hingeRight</p>
        <Image src={rcImage} className={styles.image} />
      </div>
      <div className={styles.rotateInUpLeft}>
        <p>rotateInUpLeft</p>
        <Image src={rcImage} className={styles.image} />
      </div>
      <div className={styles.rotateIn}>
        <p>rotateIn</p>
        <Image src={rcImage} className={styles.image} />
      </div>
      <div className={styles.lightSpeedOutRight}>
        <p>lightSpeedOutRight</p>
        <Image src={rcImage} className={styles.image} />
      </div>
      <div className={styles.scaleOutX}>
        <p>scaleOutX</p>
        <Image src={rcImage} className={styles.image} />
      </div>
      <div className={styles.flipInX}>
        <p>flipInX</p>
        <Image src={rcImage} className={styles.image} />
      </div>
      <div className={styles.bounce}>
        <p>bounce</p>
        <Image src={rcImage} className={styles.image} />
      </div>
      <div className={styles.rubberBand}>
        <p>rubberBand</p>
        <Image src={rcImage} className={styles.image} />
      </div>
      <div className={styles.shake}>
        <p>shake</p>
        <Image src={rcImage} className={styles.image} />
      </div>
      <div className={styles.swing}>
        <p>swing</p>
        <Image src={rcImage} className={styles.image} />
      </div>
      <div className={styles.tada}>
        <p>tada</p>
        <Image src={rcImage} className={styles.image} />
      </div>
      <div className={styles.wobble}>
        <p>wobble</p>
        <Image src={rcImage} className={styles.image} />
      </div>
    </div>
  )
}

export default Animation
