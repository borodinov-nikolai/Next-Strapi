'use client'
import styles from './Cart.module.scss'
import React, { useState } from 'react';
import {Badge, Button, Divider, Drawer, InputNumber } from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons'
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addItem, minusItem, removeItem } from '@/redux/slices/cartSlice';
import {CloseOutlined} from '@ant-design/icons'
import Image from 'next/image';
import { $apiNEXT } from '@/axios/clientConfig';



const Cart: React.FC<{user:any}> = ({user}) => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const {items, totalCount, totalPrice} = useAppSelector((state)=> state.cart)

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };





  React.useEffect(()=> {
    const serverItems = user?.cart?.items?.items
    const clientItems = localStorage.getItem('cartItems')

     if(serverItems?.length > 0) {
      serverItems.map((item:any)=> {
        dispatch(addItem(item))
      })
     } else if(clientItems){
      const  parsedClienItems = JSON.parse(clientItems)
      parsedClienItems.map((item: any)=>{
        dispatch(addItem(item))
      } )
        
     }


  },[])



  React.useEffect(()=> {

    
    localStorage.setItem('cartItems', JSON.stringify(items))
     
  
  if(user) {
   
    const addToCart = async ()=> {
      await $apiNEXT.put(`/cart`,
     { 
       id: user.cart.id,
       items
     }
     )
    }
 
    addToCart()
  }
   

  },[items])



  



  return (
    <div >
        <Badge size='small' count={totalCount}>
           <ShoppingCartOutlined style={{fontSize: '24px'}}  onClick={showDrawer}  />
           </Badge>




           <Drawer className={styles.drawer} footer={ <div className={styles.footer} > <p>Итого: {totalPrice}</p> <Button>заказать</Button></div> } title={ <div className={styles.header}>Корзина</div> } placement="right" onClose={onClose} open={open}>
               {items.map((item:any)=>{
                 return(
                  <div key={item.id}>
                   <div  className={styles.root}>
                    
                  <Image width={100} height={100}  alt='' src={`http://localhost:1337${item.image}`}/>
                  <h3 className={styles.title}>{item.name}</h3>
                  <p className={styles.price}>цена: {item.price}p</p>
                  <p className={styles.count}>кол-во:</p>
               
                  <div className={styles.buttons}>
                  <InputNumber onChange={(e)=>e as number > 0 ? dispatch(minusItem({id: item.id, count: e})):dispatch(removeItem(item)) } value={item.count} />
                                    <Button  shape={'circle'} onClick={()=> dispatch(removeItem(item))}><CloseOutlined /></Button>
                  </div>
             </div>
              <Divider />
              </div>
                )
              })}
            
      </Drawer>
      </div>

  );
};

export default Cart;