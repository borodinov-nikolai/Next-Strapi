'use client'
import React, { useState } from 'react';
import { Button, Modal, Popconfirm } from 'antd';
import {LoginOutlined, LogoutOutlined,UserOutlined} from '@ant-design/icons'
import AuthForm from './form';
import { logout } from '@/services/clientApi';



const Auth: React.FC<any> = ({user}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [registration, setRegistration] = React.useState<boolean>(false)


  const showModal = () => {
    setIsModalOpen(true);
  };


  const handleCancel = () => {
    setIsModalOpen(false);
  };


  

  const confirm = (e: React.MouseEvent<HTMLElement>) => {
      logout()
  };
  
  const cancel = (e: React.MouseEvent<HTMLElement>) => {
  
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
         onConfirm={confirm}
         onCancel={cancel}
         okText="Да"
         cancelText="Нет"
              >
              <LogoutOutlined style={{fontSize: '24px', cursor: 'pointer'}}/>
         
              </Popconfirm>
       </div>

      }
      

      
   
      <Modal footer={null} title={!registration? "Авторизация" : 'Регистрация'} open={isModalOpen} onCancel={handleCancel}>
       <div style={{margin: '50px 90px 0 0'}}><AuthForm registration={registration} setRegistration={setRegistration}  /></div>
      </Modal>
    </>
  );
};

export default Auth;