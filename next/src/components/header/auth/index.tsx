'use client'
import React, { useState } from 'react';
import { Modal, Popconfirm } from 'antd';
import {LoginOutlined, LogoutOutlined, UserOutlined} from '@ant-design/icons'
import AuthForm from './form';
import { logout } from '@/services/clientApi';
import {useRouter} from 'next/navigation'
import Link from 'next/link';
import styles from './auth.module.scss'


const Auth = ({user}:any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [registration, setRegistration] = React.useState<boolean>(false)
  const [showSubmenu, setShowSubmenu] = React.useState<boolean>(false)
  const router = useRouter();

  const showModal = () => {
    setIsModalOpen(true);
  };


  const handleCancel : ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined = (e) => {
    setIsModalOpen(false);
  };


  



  



  return (
    <div className={styles.root}>
  
      {!user?
      <LoginOutlined onClick={showModal} style={{fontSize: '24px', cursor: 'pointer'}}/>
       :
       <div style={{display: 'flex', gap: '5px'}} >
        <div style={{alignSelf:'center'}} >{user.username}</div>
        
             
                <div onClick={()=>setShowSubmenu(!showSubmenu)}  className={styles.account}>
                  <div ><UserOutlined style={{fontSize: '24px', cursor: 'pointer'}}/></div>
                  {<div onClick={(e)=> e.stopPropagation()} className={!showSubmenu ? styles.submenu : styles.submenu + ' ' + styles.submenu_hover }> 

                  <ul className={!showSubmenu ? styles.submenu_list : styles.submenu_list + ' ' + styles.submenu_list_hover }>
                    <Link onClick={()=> setShowSubmenu(false)} href='/account'>
                      <li className={styles.submenu_item}>Личный кабинет</li>
                    </Link>
                    <li onClick={()=>logout(router, setShowSubmenu)} className={styles.submenu_item}>Выйти</li>
                  </ul>
                   </div>}
                  </div>
              
         
              
       </div>

      }
      

      
   
      <Modal footer={null} title={!registration? "Авторизация" : 'Регистрация'} open={isModalOpen} onCancel={(e)=>handleCancel(e)}>
       <div style={{margin: '50px 90px 0 0'}}><AuthForm registration={registration} setRegistration={setRegistration} setIsModalOpen={setIsModalOpen} /></div>
      </Modal>
      {showSubmenu && <div className={styles.fade} onClick={()=>setShowSubmenu(!showSubmenu)} ></div>}
    </div>
  );
};

export default Auth;