'use client'
import React from 'react'
import { Carousel } from 'antd';
import Image from 'next/image';
import img1 from '@/public/Трей_Ратклифф_Новая.jpg'
import img2 from '@/public/marek-piwnicki-sIaIHalCnsM-unsplash.jpg'
import img3 from '@/public/fabrizio-coco-gVBIohdCRUQ-unsplash.jpg'

const contentStyle: React.CSSProperties = {
 width: '100%',
 height: '58vh',
  
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
  


const CarouselAnt: React.FC = () => {


const next= <button>вперед</button>

  return (
    <Carousel autoplay effect="fade">
      <div>
        <h3 style={contentStyle}>
          <Image src={img1} fill={true} alt='img' ></Image>
         
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
        <Image src={img2} fill={true} alt='img' ></Image>

        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
        <Image src={img3} fill={true} alt='img' ></Image>

        </h3>
      </div>
      
      
    </Carousel>
  );
}

export default CarouselAnt