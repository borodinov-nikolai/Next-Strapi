import ProductCard from '@/components/catalogPage/productCard'
import React from 'react'
import styles from './Smartpones.module.scss'

const Smartphones = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.cardHolder}>
          <div className={styles.card}>
            <ProductCard />
            </div>
          <div className={styles.card}>
            <ProductCard/>
            </div>
          <div className={styles.card}>
            <ProductCard/>
            </div>
          <div className={styles.card}>
            <ProductCard/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Smartphones