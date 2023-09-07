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
              <Link href="/catalog/smartphones?sort%5B0%5D=price%3Aasc" style={{color: 'black'}}  >
                Смартфоны
              </Link>
            ),
            key: 'smrtphones',
          },
          {
            label: 'Планшеты',
            key: 'tabs',
          },
          {
            label: 'Ноутбуки',
            key: 'noutbook',
          },
          {
            label: 'Телевизоры',
            key: 'tv',
          },
          {
            label: 'Игровые консоли',
            key: 'consoles',
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