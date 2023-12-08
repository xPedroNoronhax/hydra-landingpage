import BigArrow from "../../components/BigArrow";
import { LightTitle, StrongTitle } from "../../components/Titulo/styles";
import BuildSteps from "../BuildSteps";
import StepsDescription from "../StepsDescription";
import styles from "./HowBuild.module.css";

const HowBuild = () => {
  return (
    <div>
      <div className={styles.how}>
        <div className={styles.how_pt1}>
          <div className={styles.how_titles}>
            <StrongTitle fontSize={36}>How we build</StrongTitle>
            <LightTitle fontSize={36}>With hydra vr?</LightTitle>
          </div>
          <div className={styles.arrow}>
            <BigArrow />
          </div>
        </div>

        <div className={styles.how_paragraph}>
          <p>
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </div>
      </div>

      <BuildSteps/>
      <StepsDescription/>
    </div>


  );
};

export default HowBuild;
