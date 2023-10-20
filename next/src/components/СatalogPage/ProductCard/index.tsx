
import React from 'react';
import { Card} from 'antd';
import Image from 'next/image';
import ToCartBtn from './toCartBtn';
import DeviceRating from './deviceRating';



interface Props {

      name: string,
      price: number,
      image: string,
      id: number,
      rating: {
        attributes: {
          value : number
        } 
      } []
  
    
}


const ProductCard: React.FC<Props> = ({name, price, image, id, rating}) => (


  

  <Card
    hoverable
    style={{ width: '280px', height: '465px', padding: '10px' }}
    cover={ <Image
      style={{ width: 'auto', height: '250px', padding: '10px' }}
    priority
      height={820}
      width={640}
      src={process.env.NEXT_PUBLIC_IMG_URL+image}
      alt ='card'
    ></Image>  }
  >
       <div style={{marginLeft: '-20px'}}>
         <div style={{fontSize:'22px'}}>{name}</div>
        
         <div>Цена: {price}р</div>
         
           <DeviceRating rating={rating} />
       </div>
       <div style={{paddingTop: '15px', display: 'flex', justifyContent: 'end', marginRight: '-20px'}}>
          <ToCartBtn item = {{name, price, image, id}} />
       </div>
  </Card>
);

export default ProductCard;