'use client'
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import {UserOutlined} from '@ant-design/icons'
import AuthForm from './form';


const Auth: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <UserOutlined onClick={showModal} style={{fontSize: '24px'}}/>
      <Modal title="Авторизация" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
       <div style={{margin: '50px 90px 0 0'}}><AuthForm/></div>
      </Modal>
    </>
  );
};

export default Auth;