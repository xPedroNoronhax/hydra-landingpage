
import { LightBannerTitle, StrongBannerTitle,} from '../../components/Titulo/styles';
import styles from './TechList.module.css';

import tech1 from '../../assets/images/companys/Hydra-Tech1 1.png'
import tech2 from '../../assets/images/companys/Hydra-Tech2 1.png'
import tech3 from '../../assets/images/companys/Hydra-Tech3 1.png'
import tech4 from '../../assets/images/companys/Hydra-Tech4 1.png'

const TechList = () => {
  return (
    <div>
      <div className={styles.bannerContainer}>
        <div className={styles.overlay}></div>
        <div className={styles.textContainer}>
          {/* <StrongTitle fontSize={36}>Technologies & Hardware</StrongTitle>
          <LightTitle fontSize={36}>Used by Hydra VR.</LightTitle> */}
          <StrongBannerTitle>Technologies & Hardware</StrongBannerTitle>
          <LightBannerTitle>Used by Hydra VR.</LightBannerTitle>
        </div>
      </div>
      <div className={styles.companys}>
        <img src={tech1} alt="" />
        <img src={tech2} alt="" />
        <img src={tech3}alt="" />
        <img src={tech4} alt="" />

      </div>
    </div>
  );
};

export default TechList;
