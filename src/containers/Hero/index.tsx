
import Announce from '../Announce'
import Header from '../Header'
import Informations from '../Informations'
import VRpic from '../VRpic'
import styles from './Hero.module.css'


const Hero = () => {
  return (
    <>
    <Header/>
    <div className={styles.hero_content}>
        <Announce/>
        <VRpic/>
    </div>
      <Informations/>

    </>
  )
}

export default Hero
