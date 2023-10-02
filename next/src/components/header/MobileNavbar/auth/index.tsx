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


  

  const confirm = (e: React.MouseEvent<HTMLElement>) => {
       logout()
  };
  
  const cancel = (e: React.MouseEvent<HTMLElement>) => {
   
  };




  return (
    <>
  

  {!user?
  

  <div  onClick={showModal}  >
       
       <div>
         <LoginOutlined style={{fontSize: '24px', cursor: 'pointer'}}/>
       </div>
       <div>Войти</div>
     </div> 

    :

    
    <Popconfirm
    title="Выйти"
    description="Вы уверены что хотите выйти?"
    onConfirm={confirm}
    onCancel={cancel}
    okText="Да"
    cancelText="Нет"
  >
     <div>
         <LogoutOutlined style={{fontSize: '24px', cursor: 'pointer'}}/>
       </div>
       <div>{user.username}</div>
  </Popconfirm>

}
      
    

      

      <Modal footer={null} title={!registration? "Авторизация" : 'Регистрация'} open={isModalOpen} onCancel={handleCancel}>
       <div style={{margin: '50px 90px 0 0'}}><AuthForm registration={registration} setRegistration={setRegistration}  /></div>
      </Modal>
    </>
  );
};

export default Auth;