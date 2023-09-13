'use client'
import React from 'react';
import { Button, Checkbox, Form, Input, Result} from 'antd';
import styles from './AuthForm.module.scss'
import { auth, register } from '@/services/clientApi';




type FieldType = {
  username?: string;
  password?: string;
  email?: string,
  remember?: string;
};

interface Props {
  registration : boolean,
  setRegistration : React.Dispatch<React.SetStateAction<boolean>>
}

const AuthForm: React.FC<Props> = ({registration, setRegistration}) =>{
  const [login, setLogin]= React.useState<string>('');
  const [email, setEmail]= React.useState<string>('');
  const [password, setPassword]= React.useState<string>('');
  const [success, setSuccess]= React.useState<boolean>(false);




   if (!registration){
    return(
      
<Form
  className={styles.root}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Логин"
     
      >
        <Input onChange={(e)=> setLogin(e.target.value)} />
      </Form.Item>
  
      <Form.Item<FieldType>
        label="Пароль"
     
      >
        <Input.Password onChange={(e)=> setPassword(e.target.value)} />
      </Form.Item>
  
      <Form.Item<FieldType>
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
  
         <Checkbox>Запомнить меня</Checkbox>
       </Form.Item>
        <div className={styles.text} >Нет аккаунта? <span onClick={()=> setRegistration(true)}>Зарегистрируйся!</span></div>
          <div style={{display:'flex', justifyContent: 'end'}}>
            <Button type='primary' style={{marginRight: '-70px'}} onClick={()=>auth(login, password)} >Авторизоваться</Button>
            </div>
    </Form>
 ) 

  } else{

  return(
    
!success?
<Form
className={styles.root}
  name="basic"
  labelCol={{ span: 8 }}
  wrapperCol={{ span: 16 }}
  style={{ maxWidth: 600 }}
  initialValues={{ remember: true }}
  autoComplete="off"
>



  <Form.Item<FieldType>
    label="Логин"
  >
    <Input onChange={(e)=> setLogin(e.target.value)} />
  </Form.Item>
  <Form.Item<FieldType>
    label="Email"
  >
    <Input onChange={(e)=> setEmail(e.target.value)} />
  </Form.Item>
  <Form.Item<FieldType>
    label="Пароль"
  >
    <Input.Password onChange={(e)=> setPassword(e.target.value)} />
  </Form.Item>
  
    <div className={styles.text} >Есть аккаунт? <span onClick={()=> setRegistration(false)} >Авторизуйся!</span></div>
  

  

      <div style={{display:'flex', justifyContent: 'end'}}>
        <Button type='primary' style={{marginRight: '-70px'}} onClick={()=>{register(login, email, password, setSuccess)}} >Зарегистрироваться</Button>
        
        </div>
</Form>

:
<Result
className={styles.result}
status="success"
title="Вы успешно зарегистрировались!"
/>
  )
}
}

export default AuthForm;