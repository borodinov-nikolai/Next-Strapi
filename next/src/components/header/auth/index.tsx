'use client'
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import {UserOutlined} from '@ant-design/icons'
import AuthForm from './form';
import { $apiNEXT } from '@/axios/clientConfig';
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






  return (
    <>
  
      {!user ? 
      <UserOutlined onClick={showModal} style={{fontSize: '24px'}}/> :
      <div>{user.username} <Button size='small' onClick={logout} type='primary'>Выйти</Button></div>

      }
    
   
      <Modal footer={null} title={!registration? "Авторизация" : 'Регистрация'} open={isModalOpen} onCancel={handleCancel}>
       <div style={{margin: '50px 90px 0 0'}}><AuthForm registration={registration} setRegistration={setRegistration}  /></div>
      </Modal>
    </>
  );
};

export default Auth;