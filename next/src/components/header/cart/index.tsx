'use client'
import React, { useState } from 'react';
import {Drawer } from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons'

const Cart: React.FC = () => {
  const [open, setOpen] = useState(false);

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
      
      </Drawer>
    </>
  );
};

export default Cart;