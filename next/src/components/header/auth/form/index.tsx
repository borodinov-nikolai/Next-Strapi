'use client'
import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const AuthForm: React.FC = () =>{

  const [login, setLogin]= React.useState<string>('');
  const [password, setPassword]= React.useState<string>('');

   const auth = async ()=> {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API}/auth`, {
      identifier: login,
      password
    })
    console.log(res)
    return res
   }
  
 return(
<Form
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
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input onChange={(e)=> setLogin(e.target.value)} />
    </Form.Item>

    <Form.Item<FieldType>
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password onChange={(e)=> setPassword(e.target.value)} />
    </Form.Item>

    <Form.Item<FieldType>
      name="remember"
      valuePropName="checked"
      wrapperCol={{ offset: 8, span: 16 }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>
        <Button onClick={auth} >Авторизоваться</Button>
  </Form>
 ) 
};

export default AuthForm;