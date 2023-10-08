'use client'
import React, { useState } from 'react';
import { Modal, Popconfirm } from 'antd';
import {LoginOutlined, LogoutOutlined} from '@ant-design/icons'
import AuthForm from './form';
import { logout } from '@/services/clientApi';
import {useRouter} from 'next/navigation'



const Auth = ({user}:any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [registration, setRegistration] = React.useState<boolean>(false)
  const router = useRouter();

  const showModal = () => {
    setIsModalOpen(true);
  };


  const handleCancel : ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined = (e) => {
    setIsModalOpen(false);
  };


  

  const confirm :(e: React.MouseEvent<HTMLElement, MouseEvent>) => void = (e)=> {
      logout(router);
    
  };

  const cancel: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void = (e)=> {
    
};

  

<LogoutOutlined />


  return (
    <>
  
      {!user?
      <LoginOutlined onClick={showModal} style={{fontSize: '24px', cursor: 'pointer'}}/>
       :
       <div style={{display: 'flex', gap: '5px'}} >
        <div style={{alignSelf:'center'}} >{user.username}</div>
         <Popconfirm
         title="Выйти"
         description="Вы уверены что хотите выйти?"
         onConfirm={(e)=> confirm(e)}
         onCancel={(e)=> cancel(e)}
         okText="Да"
         cancelText="Нет"
              >
              <LogoutOutlined style={{fontSize: '24px', cursor: 'pointer'}}/>
         
              </Popconfirm>
       </div>

      }
      

      
   
      <Modal footer={null} title={!registration? "Авторизация" : 'Регистрация'} open={isModalOpen} onCancel={(e)=>handleCancel(e)}>
       <div style={{margin: '50px 90px 0 0'}}><AuthForm registration={registration} setRegistration={setRegistration} setIsModalOpen={setIsModalOpen} /></div>
      </Modal>
    </>
  );
};

export default Auth;