import React from 'react'
import { Carousel } from 'antd';
import Image from 'next/image';

const contentStyle: React.CSSProperties = {
  margin: 0,
  width: '1200px',
  height: '500px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
  



const CarouselAnt: React.FC = () => {

  return (
    <Carousel autoplay  effect="fade">
      <div>
        <h3 style={contentStyle}>
          <Image src='/Трей_Ратклифф_Новая.jpg' width={1200} height={500} alt='img' ></Image>
         
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
        <Image src='/marek-piwnicki-sIaIHalCnsM-unsplash.jpg' width={1200} height={500} alt='img' ></Image>

        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
        <Image src='/fabrizio-coco-gVBIohdCRUQ-unsplash.jpg' width={1200} height={500} alt='img' ></Image>

        </h3>
      </div>
      
    </Carousel>
  );
}

export default CarouselAnt