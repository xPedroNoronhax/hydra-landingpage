import { AnnounceButton } from '../../components/Botoes'
import { LightTitle, StrongTitle } from '../../components/Titulo/styles'
import styles from './About.module.css'
const About = () => {
  return(
    <div>
      <div className={styles.about}>

        <div className={styles.about_pic} >
          <img src="https://s3-alpha-sig.figma.com/img/1cc9/d296/7acef42bde421ac41ea8e5c2550b903d?Expires=1702857600&Signature=lS-FvRTzxvH8xC5acIm~Ac8sD~lwKxJt5tkgDiboX5K1-ue-rn-OlLkPkEklk2MKY0iXquKLqmw22nXH4j4ZUvU-XLlKuxM-lQ3RK-HtJ2TFYGC~jK1lhXw4kjtaPa7121pLh6PnT56GG-TBLGgROybTJCIIWBMde9-PPqJSbDPVHszojePeam1c5fkgFtJD0YDCtL5MlYjYsPbWMtdvbRbA~M3Q7R6oe8RVg3cVI3X7riallZ5FEe8us6EwzclKSrM~Xosgwki5ftGriYJohWe8-iPhc8zLqKbwqrPNpJFyFZW2dZPmIcZ4ap8vdGfWdR-qqHPnAmaeF7yWJ44Wsw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
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
