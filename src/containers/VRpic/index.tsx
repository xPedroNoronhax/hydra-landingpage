import styles from './VRpic.module.css'
import image from '../../assets/images/pexels-michelangelo-buonarroti-8728382 1.png'

const VRpic = () => {
  return (
    <div className={styles.hero_pic} >
      <img className={styles.hero_pic_img} src={image} alt="" />
    </div>
  )
}

export default VRpic
