
import BigArrow from '../../components/BigArrow';
import { LightTitle, StrongTitle } from '../../components/Titulo/styles';
import styles from './WhyBuild.module.css';

const WhyBuild = () => {
  return (
    <div>
      <div className={styles.why}>
        <div className={styles.why_pt1}>
          <div className={styles.why_titles}>
            <StrongTitle fontSize={36}>Why Build</StrongTitle>
            <LightTitle fontSize={36}>With Hydra?</LightTitle>
          </div>
          <div className={styles.arrow}>
            <BigArrow />
          </div>
        </div>

        <div className={styles.why_paragraph}>
          <p>
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyBuild;
