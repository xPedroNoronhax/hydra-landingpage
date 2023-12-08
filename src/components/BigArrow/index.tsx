import styles from './BigArrow.module.css'
const BigArrow = () => {
  return(
    <div className={styles.BigArrow} >
      <svg xmlns="http://www.w3.org/2000/svg" width="158" height="4" viewBox="0 0 158 4" fill="none">
  <path d="M157.5 2H0" stroke="#C0B7E8" stroke-width="3"/>
      </svg>
<svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
  <path d="M70.8333 50L29.1667 50M70.8333 50L54.1667 66.6666M70.8333 50L54.1667 33.3333" stroke="#C0B7E8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </div>
  )

}

export default BigArrow
