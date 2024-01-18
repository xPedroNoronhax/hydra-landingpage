import { AnnounceButton } from '../../components/Botoes'
import { LightTitle, StrongTitle } from '../../components/Titulo/styles'
import styles from './About.module.css'
import image from '../../assets/images/aboutpic.png'
const About = () => {
  return(
    <div>
      <div className={styles.about}>

        <div className={styles.about_pic} >
          <img src={image} alt="" />
        </div>

        <div className={styles.about_txt}>
          <div className={styles.about_txt__title}>
            <StrongTitle fontSize={36}>About</StrongTitle>
            <LightTitle fontSize={36}>HYDRA VR</LightTitle>
          </div>
          <div className={styles.about_txt__paragraph}>
            <p>
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi n tempor.
            </p>
          </div>
          <AnnounceButton>LET’S GET IN TOUCH</AnnounceButton>
        </div>

      </div>
    </div>
  )
}

export default About
