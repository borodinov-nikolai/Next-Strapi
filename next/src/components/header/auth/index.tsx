'use client'
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import {UserOutlined} from '@ant-design/icons'
import AuthForm from './form';
import { useAppSelector } from '@/redux/hooks';


const Auth: React.FC = () => {
  const {isAuth} = useAppSelector((state)=> state.user)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };


  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    {!isAuth &&
     <UserOutlined onClick={showModal} style={{fontSize: '24px'}}/>
    }
   
      <Modal footer={null} title="Авторизация" open={isModalOpen} onCancel={handleCancel}>
       <div style={{margin: '50px 90px 0 0'}}><AuthForm/></div>
      </Modal>
    </>
  );
};

export default Auth;