'use client'
import React, { useState } from 'react';
import { Modal, Popconfirm} from 'antd';
import {LoginOutlined,LogoutOutlined} from '@ant-design/icons'
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


  




  return (
    <>
  


  

  <div  onClick={showModal}  >
       
       <div>
         <LoginOutlined style={{fontSize: '24px', cursor: 'pointer'}}/>
       </div>
       <div>Войти</div>
     </div> 

    

 


      
    

      

      <Modal footer={null} title={!registration? "Авторизация" : 'Регистрация'} open={isModalOpen} onCancel={handleCancel}>
       <div style={{margin: '50px 90px 0 0'}}><AuthForm registration={registration} setRegistration={setRegistration}  /></div>
      </Modal>
    </>
  );
};

export default Auth;