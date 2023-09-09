
import React from 'react';
import { Card, Rate} from 'antd';
import Image from 'next/image';
import ToCartBtn from './toCartBtn';



interface Props {

      name: string,
      price: number,
      image: string,
      id: number
  
    
}


const ProductCard = ({name, price, image, id}: Props) => (



  <Card
    hoverable
    style={{ width: '280px', height: '465px', padding: '10px' }}
    cover={ <Image
      style={{ width: 'auto', height: '250px', padding: '10px' }}
    priority
      height={820}
      width={640}
      src={`http://localhost:1337${image}`}
      alt ='card'
    ></Image>  }
  >
       <div style={{marginLeft: '-20px'}}>
         <div style={{fontSize:'22px'}}>{name}</div>
         <Rate disabled defaultValue={5} />
         <div>Цена: {price}р</div>
       </div>

       <div style={{paddingTop: '15px', display: 'flex', justifyContent: 'end', marginRight: '-20px'}}>
          <ToCartBtn item = {{name, price, image, id}} />
       </div>
  </Card>
);

export default ProductCard;