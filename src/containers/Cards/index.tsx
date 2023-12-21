
import styles from './Cards.module.css';

import CustomTitle from '../../components/Titulo';

import { CardParagraph } from '../../components/Paragrafo/style';
import { CardButton } from '../../components/Botoes';

import simulation from '../../assets/images/simulation.png'
import education from '../../assets/images/education.png'
import selfcare from '../../assets/images/selfcare.png'
import outdoor from '../../assets/images/outdoor.png'

const Cards = () => {
  return (
    <div>
      <div className={styles.cards}>
        <div className={styles.cards_card}>
          <div className={styles.card_pic}>
            <svg xmlns="http://www.w3.org/2000/svg" width="219" height="219" viewBox="0 0 219 219" fill="none">
              <circle cx="109.5" cy="109.5" r="109.5" fill="#0E0E0E" fillOpacity="0.32" />
              <foreignObject width="100%" height="100%">
                <img className={styles.profile_pic} src={simulation} alt="Profile Picture" />
              </foreignObject>
            </svg>
          </div>
          <div className={styles.card_title}>
            <CustomTitle fontSize={24}>Simulation</CustomTitle>
            <svg xmlns="http://www.w3.org/2000/svg" width="155" height="1" viewBox="0 0 155 1" fill="none">
          <path d="M0.5 0.5H154.5" stroke="#C0B7E8" stroke-opacity="0.33"/>
            </svg>
          </div>
          <div className={styles.card_text}>
            <CardParagraph fontSize={12}>
            Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.
            </CardParagraph>
          </div>
          <div className={styles.card_button}>
              <CardButton>Try it now</CardButton>
          </div>

        </div>

        {/* Repeat the structure for additional cards */}
        <div className={styles.cards_card}>
        <div className={styles.card_pic}>
            <svg xmlns="http://www.w3.org/2000/svg" width="219" height="219" viewBox="0 0 219 219" fill="none">
              <circle cx="109.5" cy="109.5" r="109.5" fill="#0E0E0E" fillOpacity="0.32" />
              <foreignObject width="100%" height="100%">
                <img className={styles.profile_pic} src={education} alt="Profile Picture" />
              </foreignObject>
            </svg>
          </div>
          <div className={styles.card_title}>
            <CustomTitle fontSize={24}>Education</CustomTitle>
            <svg xmlns="http://www.w3.org/2000/svg" width="155" height="1" viewBox="0 0 155 1" fill="none">
          <path d="M0.5 0.5H154.5" stroke="#C0B7E8" stroke-opacity="0.33"/>
            </svg>
          </div>
          <div className={styles.card_text}>
            <CardParagraph fontSize={12}>
            Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.
            </CardParagraph>
          </div>
          <div className={styles.card_button}>
              <CardButton>Try it now</CardButton>
          </div>

        </div>

        <div className={styles.cards_card}>
        <div className={styles.card_pic}>
            <svg xmlns="http://wwwa.w3.org/2000/svg" width="219" height="219" viewBox="0 0 219 219" fill="none">
              <circle cx="109.5" cy="109.5" r="109.5" fill="#0E0E0E" fillOpacity="0.32" />
              <foreignObject width="100%" height="100%">
                <img className={styles.profile_pic} src={selfcare} alt="Profile Picture" />
              </foreignObject>
            </svg>
          </div>
          <div className={styles.card_title}>
            <CustomTitle fontSize={24}>Self-care</CustomTitle>
            <svg xmlns="http://www.w3.org/2000/svg" width="155" height="1" viewBox="0 0 155 1" fill="none">
          <path d="M0.5 0.5H154.5" stroke="#C0B7E8" stroke-opacity="0.33"/>
            </svg>
          </div>
          <div className={styles.card_text}>
            <CardParagraph fontSize={12}>
            Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.
            </CardParagraph>
          </div>
          <div className={styles.card_button}>
              <CardButton>Try it now</CardButton>
          </div>

        </div>
        <div className={styles.cards_card}>
        <div className={styles.card_pic}>
            <svg xmlns="http://www.w3.org/2000/svg" width="219" height="219" viewBox="0 0 219 219" fill="none">
              <circle cx="109.5" cy="109.5" r="109.5" fill="#0E0E0E" fillOpacity="0.32" />
              <foreignObject width="100%" height="100%">
                <img className={styles.profile_pic} src={outdoor} alt="Profile Picture" />
              </foreignObject>
            </svg>
          </div>
          <div className={styles.card_title}>
            <CustomTitle fontSize={24}>Outdoor</CustomTitle>
            <svg xmlns="http://www.w3.org/2000/svg" width="155" height="1" viewBox="0 0 155 1" fill="none">
          <path d="M0.5 0.5H154.5" stroke="#C0B7E8" stroke-opacity="0.33"/>
            </svg>
          </div>
          <div className={styles.card_text}>
            <CardParagraph fontSize={12}>
            Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.
            </CardParagraph>
          </div>
          <div className={styles.card_button}>
              <CardButton>Try it now</CardButton>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cards;
