import { AnnounceButton } from '../../components/Botoes'
import { LightTitle, StrongTitle } from '../../components/Titulo/styles'
import styles from './About.module.css'
const About = () => {
  return(
    <div>
      <div className={styles.about}>

        <div className={styles.about_pic} >
          <img src="https://s3-alpha-sig.figma.com/img/1cc9/d296/7acef42bde421ac41ea8e5c2550b903d?Expires=1704067200&Signature=kfeMb0BMy9lCvSt-msChrU9NjqaFTq5vPFGujzmVx19FHV1DQaMJYiObNoB4hi0mGevJ-7slVLYhPT3jxVRUKrRL-D5Pt80KPZn3RmvZ-mXEjwtm5V6nKtNmHDO54SOvamJKHi33Hdgy66XronPxZbW3vBXdDhM9u9UbJ1M5iE7Ui~Y4Q28-EQyAQt5aH7WaYZ4XjZvJdLfn8UO4gTU06f46fktF3dJavVaaKzEbz1N1yS7au0Ntz3GY2PQE1mSDw6iK8sqL6bZv4MoGXZ0OJ5oFGTJO8IMfAmNE-NbV41l1rOWl6LtwS7hv1PE7b~ZgPMfB42QawtcYKIViuFlGYQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
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
