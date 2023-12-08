import { StepTitle,  } from "../../components/Titulo/styles";
import styles from "./StepsDescription.module.css";

const StepsDescription = () => {
  return (
    <div>
      <div className={styles.descriptions}>

        <div className={styles.description_container}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="67"
            height="67"
            viewBox="0 0 67 67"
            fill="none"
          >
            <path
              d="M47.4584 33.4999L19.5417 33.4999M47.4584 33.4999L36.2917 44.6666M47.4584 33.4999L36.2917 22.3333"
              stroke="#C0B7E8"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className={styles.steptitle}>
            <StepTitle>3D Conception<span> & Design</span></StepTitle>
          </div>


        </div>
        <div className={styles.description_container}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="67"
            height="67"
            viewBox="0 0 67 67"
            fill="none"
          >
            <path
              d="M47.4584 33.4999L19.5417 33.4999M47.4584 33.4999L36.2917 44.6666M47.4584 33.4999L36.2917 22.3333"
              stroke="#C0B7E8"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className={styles.steptitle}>
            <StepTitle>Interaction<span> & Design</span></StepTitle>
          </div>


        </div>
        <div className={styles.description_container}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="67"
            height="67"
            viewBox="0 0 67 67"
            fill="none"
          >
            <path
              d="M47.4584 33.4999L19.5417 33.4999M47.4584 33.4999L36.2917 44.6666M47.4584 33.4999L36.2917 22.3333"
              stroke="#C0B7E8"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className={styles.steptitle}>
            <StepTitle>VR World<span>User Testing</span></StepTitle>
          </div>


        </div>
        <div className={styles.description_container}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="67"
            height="67"
            viewBox="0 0 67 67"
            fill="none"
          >
            <path
              d="M47.4584 33.4999L19.5417 33.4999M47.4584 33.4999L36.2917 44.6666M47.4584 33.4999L36.2917 22.3333"
              stroke="#C0B7E8"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className={styles.steptitle}>
            <StepTitle>Hydra VR<span>dEPLOY</span></StepTitle>
          </div>


        </div>
      </div>
    </div>
  );
};

export default StepsDescription;
