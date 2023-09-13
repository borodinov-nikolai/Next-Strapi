'use client'
import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import styles from './AuthForm.module.scss'
import { $apiNEXT } from '@/axios/clientConfig';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

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



   const auth = async ()=> {
    try {
      const {data} = await $apiNEXT.post('/auth/login', {
        identifier: login,
        password
      })
      location.reload()
      return data

    } catch(error: any) {
      console.error(error.message)
    }
   
   }

   const register = async ()=> {

    try {
      await $apiNEXT.post('/auth/register', {
        username: login,
        email,
        password
      })
     
       location.reload()
    } catch(e) {
      console.error(e)
    }
   
     
   }



   

   if (!registration){
    return(
<Form
  className={styles.root}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
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
            <Button type='primary' style={{marginRight: '-70px'}} onClick={auth} >Авторизоваться</Button>
            </div>
    </Form>
 ) 

  } else{

  return(
<Form
className={styles.root}
  name="basic"
  labelCol={{ span: 8 }}
  wrapperCol={{ span: 16 }}
  style={{ maxWidth: 600 }}
  initialValues={{ remember: true }}
  onFinish={onFinish}
  onFinishFailed={onFinishFailed}
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
        <Button type='primary' style={{marginRight: '-70px'}} onClick={register} >Зарегистрироваться</Button>
        </div>
</Form>

  )
}
}

export default AuthForm;