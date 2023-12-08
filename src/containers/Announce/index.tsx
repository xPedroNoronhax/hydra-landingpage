

import { AnnounceButton,  } from '../../components/Botoes'
import styles from './Announce.module.css'

const Announce = () => {
  return(
    <div>
      <div className={styles.Announce}>
        <h1><span>Dive</span> into The Depths</h1>
        <h1>Of <span>Virtual Reality</span></h1>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore
      nisl tincidunt eget. Lectus mauris eros in vitae .
      </p>

      <div className={styles.announce_btns} >
        <AnnounceButton>Build Your World</AnnounceButton>
        <a>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
        <path d="M70.8333 50L29.1667 50M70.8333 50L54.1667 66.6667M70.8333 50L54.1667 33.3333" stroke="#C0B7E8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </a>
      </div>

    </div>
    )
}

export default Announce
