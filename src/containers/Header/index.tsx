import { PrimaryButton, SecondaryButton } from '../../components/Botoes';
import styles from './Header.module.css'

const Header = () => (
  <header className={styles.mainHeader}>
    <div className={styles.mainHeader__logo}>
      <img className={styles.imgLogo} src="src\assets\images\Logoimg.svg" alt="" />
      <img className={styles.imgTxt}  src="src\assets\images\Logotxt.svg" alt="" />
      <ul className={styles.mainHeader__menu}>
        <li>
          <a className={styles.mainHeader__menu__link} href="#">About</a>
        </li>
        <li>
          <a className={styles.mainHeader__menu__link} href="#">Services</a>
        </li>
        <li>
          <a className={styles.mainHeader__menu__link} href="#">Technologies</a>
        </li>
        <li>
          <a className={styles.mainHeader__menu__link} href="#">How to</a>
        </li>
      </ul>
      <div className={styles.mainHeader__buttons}>
        <SecondaryButton>Contact us</SecondaryButton>
        <PrimaryButton>Join Hydra</PrimaryButton>
      </div>
    </div>
  </header>
)

export default Header;
