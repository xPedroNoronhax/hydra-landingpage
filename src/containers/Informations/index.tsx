import styles from './Informations.module.css'

import location from '../../assets/images/Location-Icon-removebg-preview.png'
import phone from '../../assets/images/phone-call-removebg-preview.png'
import mail from '../../assets/images/mail-removebg-preview.png'


const Informations = () => {
  return(
    <div className={styles.information_container}>
      <div className={styles.information_container__content}>
        <div className={styles.information_container__content__img}>
          <img src={location} alt="" />
          </div>
        <div className={styles.information_container__info}>
          <h3>Pay Us a Visit</h3>
          <p>Union St, Seattle, WA 98101, United States</p>
        </div>
        <div className={styles.vector}>
          <img  src="\images\Vector 6.svg" alt="" />
        </div>
      </div>
      <div className={styles.information_container__content}>
        <div className={styles.information_container__content__img}>
          <img src={phone} alt="" />
          </div>
        <div className={styles.information_container__info}>
          <h3>Give Us a Call</h3>
          <p>(110) 1111-1010</p>
        </div>
        <div className={styles.vector}>
          <img  src="\images\Vector 6.svg" alt="" />
        </div>
      </div>
      <div className={styles.information_container__content}>
        <div className={styles.information_container__content__img}>
          <img src={mail} alt="" />
          </div>
        <div className={styles.information_container__info}>
          <h3>Send Us a Message</h3>
          <p>Contact@HydraVTech.com</p>
        </div>
      </div>
    </div>
  )
  }
export default Informations
