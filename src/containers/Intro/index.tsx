
import BigArrow from "../../components/BigArrow"
import { LightTitle, StrongTitle } from "../../components/Titulo/styles"
import styles from './Intro.module.css'

const Intro = () => {
  return(
    <div >
      <div className={styles.intro}>
        <div className={styles.intro_pt1}>
          <div className={styles.intro_titles}>
            <StrongTitle fontSize={36}>Introduction</StrongTitle>
            <LightTitle fontSize={36}>To Hydra vr</LightTitle>
          </div>
          <div className={styles.arrow}>
            <BigArrow/>
          </div>
        </div>
        <div className={styles.intro_paragraph}>
          <p>
          Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
          nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
          quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
          lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Intro
