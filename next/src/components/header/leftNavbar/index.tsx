import React from 'react';
import {HomeOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu, Space } from 'antd';
import Link from 'next/link';

const items: MenuProps['items'] = [
  
  {
    label: <HomeOutlined  style={{fontSize: '24px'}}/>,
    key: 'logo',
    
  },
  {
    label: (
      <Link href="/" rel="noopener noreferrer" style={{color: 'black'}} >
        Главная
      </Link>
    ),
    key: 'home',
 
  },
  {
    label: 'Каталог',
    key: 'catalog',
    
    children: [
      {
        type: 'group',
        children: [
          {
            label: (
              <Link href="/catalog/smartphones" style={{color: 'black'}}  >
                Смартфоны
              </Link>
            ),
            key: 'smrtphones',
          },
          {
            label: 'Планшеты',
            key: 'setting:2',
          },
          {
            label: 'Ноутбуки',
            key: 'setting:2',
          },
          {
            label: 'Телевизоры',
            key: 'setting:2',
          },
          {
            label: 'Игровые консоли',
            key: 'setting:2',
          },
        ],
      },
     
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
       О нас
      </a>
    ),
    key: 'about us',
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
       Контакты
      </a>
    ),
    key: 'contacts',
  }
 

];

const LeftNavbar: React.FC = () => {


  

  return (
  
 

    <Menu mode="horizontal" items={items}></Menu>
 
  
  
 
  )
  
};

export default LeftNavbar;