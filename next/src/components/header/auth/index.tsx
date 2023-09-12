'use client'
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import {UserOutlined} from '@ant-design/icons'
import AuthForm from './form';
import { $apiNEXT } from '@/axios/clientConfig';


const Auth: React.FC<any> = ({user}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [registration, setRegistration] = React.useState<boolean>(false)


  const showModal = () => {
    setIsModalOpen(true);
  };


  const handleCancel = () => {
    setIsModalOpen(false);
  };



  const logout = async ()=> {
    const res = await $apiNEXT.post('/auth/logout');
    window.location.reload();
  }


  return (
    <>
  
      {!user ? 
      <UserOutlined onClick={showModal} style={{fontSize: '24px'}}/> :
      <div>{user.username} <Button onClick={logout} type='primary'>Выйти</Button></div>

      }
    
   
      <Modal footer={null} title={!registration? "Авторизация" : 'Регистрация'} open={isModalOpen} onCancel={handleCancel}>
       <div style={{margin: '50px 90px 0 0'}}><AuthForm registration={registration} setRegistration={setRegistration}  /></div>
      </Modal>
    </>
  );
};

export default Auth;