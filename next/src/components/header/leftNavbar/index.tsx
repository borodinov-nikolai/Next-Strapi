import React from 'react';
import {HomeOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu, Space } from 'antd';
import Link from 'next/link';
import styles from './LeftNavbar.module.scss'

const items: MenuProps['items'] = [
  
  {
    label: 
    <Link href="/" rel="noopener noreferrer" style={{color: 'black'}} >
    <HomeOutlined  style={{fontSize: '24px'}}/>
    </Link>,

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
      <Link href="/about"  rel="noopener noreferrer">
       О нас
      </Link>
    ),
    key: 'aboutus',
  },
  {
    label: (
      <Link href="/contacts"  rel="noopener noreferrer">
       Контакты
      </Link>
    ),
    key: 'contacts',
  }
 

];

const LeftNavbar: React.FC = () => {


  

  return (
  
 

    <Menu className={styles.root} mode="horizontal" items={items}></Menu>
 
  
  
 
  )
  
};

export default LeftNavbar;