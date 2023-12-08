import { AnnounceButton } from "../../components/Botoes";
import { LightFormTitle, StrongTitle } from "../../components/Titulo/styles";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <div>
      <div className={styles.form_container}>
        <div className={styles.form_title}>
          <StrongTitle fontSize={36}>join hydra</StrongTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="414"
            height="2"
            viewBox="0 0 414 2"
            fill="none"
          >
            <path d="M0 1H414" stroke="url(#paint0_linear_13_46)" />
            <defs>
              <linearGradient
                id="paint0_linear_13_46"
                x1="414"
                y1="1.00238"
                x2="0"
                y2="1"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#343045" />
                <stop offset="0.348958" stop-color="#C0B7E8" />
                <stop offset="0.6875" stop-color="#8176AF" />
                <stop offset="1" stop-color="#343045" />
              </linearGradient>
            </defs>
          </svg>
          <LightFormTitle fontSize={36}>Let's Build Your VR Experience</LightFormTitle>
        </div>
        <form>
          <div className={styles.rowone}>
            <label>
              <input type="text" placeholder="Name" />
            </label>
            <label>
              <input type="text" placeholder="Last Name" />
            </label>
          </div>
          <div className={styles.rowone}>
            <label>
              <input type="email" placeholder="Email" />
            </label>
            <label>
              <input type="tel" placeholder="Phone Number" />
            </label>
          </div>
          <div className={styles.rowtwo}>
            <label>
              <input type="text" placeholder="Subject" />
            </label>
          </div>

          <div className={styles.rowtree}>
            <label>
              <textarea placeholder="Tell Us Something..."></textarea>
            </label>
          </div>

          <div className={styles.formBtn}>
            <AnnounceButton>Send to Hydra</AnnounceButton>
          </div>



        </form>
      </div>
    </div>
  );
};

export default Form;
