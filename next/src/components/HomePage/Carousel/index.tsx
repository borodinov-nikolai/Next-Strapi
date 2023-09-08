import React from 'react'
import { Carousel } from 'antd';
import Image from 'next/image';
import img1 from '@/public/17b42a7a6a8af63a34c50b1cc5544de9.png'
import img2 from '@/public/8d01bba1a69541d1bd79443284724437.jpg'
import img3 from '@/public/987ff7a670eaaa8ed00531cd6ed973eb.png'
import styles from './Carousel.module.scss'

const contentStyle: React.CSSProperties = {
 width: '100%',
 height: '70vh',
  
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
  


const CarouselAnt: React.FC = () => {


const next= <button>вперед</button>

  return (
    <Carousel className={styles.root} autoplay effect="fade">
      <div className={styles.item} >
        <h3 style={contentStyle}>
          <Image className={styles.image} priority src={img1} width={1920} height={1080} quality={100} alt='img' ></Image>
           <div className={styles.title} >OnePlus Ace <br/>
Быстрый, бескомпромиссный</div>
        </h3>
      </div>
      <div className={styles.item}>
        <h3 style={contentStyle}>
        <Image className={styles.image} src={img2} width={1920} height={1080} priority quality={100} alt='img' ></Image>
            <div className={styles.title}>OnePlus Buds Pro 2 <br/>
В кооперации с DYNAUDIO</div>
        </h3>
      </div>
      <div className={styles.item}> 
        <h3 style={contentStyle}>
        <Image className={styles.image} src={img3} width={1920} height={1080} priority quality={100} alt='img' ></Image>
        <div className={styles.title}>OnePlus 11 <br />
Олицетворение <br />
силы и элегантности</div>

        </h3>
      </div>
      
      
    </Carousel>
  );
}

export default CarouselAnt