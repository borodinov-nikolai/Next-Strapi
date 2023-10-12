import React from 'react'
import styles from './catalog.module.scss'


const Catalog = () => {
  return (
      <div className={styles.root} >
    <div className='container'>
     <div className={styles.menu} >
        <div className={styles.menu_item}></div>
        <div className={styles.menu_item}></div>
        <div className={styles.menu_item}></div>
        <div className={styles.menu_item}></div>
        <div className={styles.menu_item}></div>
        <div className={styles.menu_item}></div>
     </div>
      </div>
    </div>
  )
}

export default Catalog