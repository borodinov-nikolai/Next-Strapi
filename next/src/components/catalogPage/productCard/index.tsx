
import React from 'react';
import { Button, Card, Rate} from 'antd';
import Image from 'next/image';



interface Props {

      name: string,
      price: number,
      image: string
  
    
}


const ProductCard = ({name, price, image}: Props) => (



  <Card
    hoverable
    style={{ width: '250px', height: '480px', padding: '10px' }}
    cover={ <Image
      height={280}
      width={400}
      src={`http://localhost:1337${image}`}
      alt ='card'
    ></Image>  }
  >
       <div style={{marginLeft: '-20px'}}>
         <div style={{fontSize:'22px'}}>{name}</div>
         <Rate disabled defaultValue={5} />
         <div>Цена: {price}р</div>
       </div>

       <div style={{paddingTop: '35px', display: 'flex', justifyContent: 'end', marginRight: '-20px'}}>
        <Button>В корзину</Button>
       </div>
  </Card>
);

export default ProductCard;