
import { LightBannerTitle, StrongBannerTitle,} from '../../components/Titulo/styles';
import styles from './TechList.module.css';

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
        <img src="src\assets\images\companys\Hydra-Tech1 1.png" alt="" />
        <img src="src\assets\images\companys\Hydra-Tech3 1.png" alt="" />
        <img src="src\assets\images\companys\Hydra-Tech2 1.png" alt="" />
        <img src="src\assets\images\companys\Hydra-Tech4 1.png" alt="" />

      </div>
    </div>
  );
};

export default TechList;
