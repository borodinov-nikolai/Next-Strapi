'use client'
import React, { useState } from 'react';
import {Divider, Drawer } from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons'
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addItem, minusItem, removeItem } from '@/redux/slices/cartSlice';
import Image from 'next/image';

const Cart: React.FC = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const {items, totalPrice} = useAppSelector((state)=> state.cart)

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };



  return (
    <>
           <ShoppingCartOutlined onClick={showDrawer} style={{fontSize: '24px'}} />
      <Drawer title="Корзина" placement="right" onClose={onClose} open={open}>
             {items.map((item)=>{
              return(<div> <Image width={80} height={80}  alt='' src={`http://localhost:1337${item.image}`}></Image>  название: {item.name} кол-во:{item.count} <button onClick={()=> dispatch(minusItem(item))} >-</button>
              <button onClick={()=> dispatch(addItem(item))} >+</button>
              <button onClick={()=> dispatch(removeItem(item))}>X</button>
              </div>)
             })}
      </Drawer>
    </>
  );
};

export default Cart;