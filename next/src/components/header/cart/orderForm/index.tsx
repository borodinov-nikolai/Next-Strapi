import { $apiClient_CMS } from '@/axios/clientConfig';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { clearItems } from '@/redux/slices/cartSlice';
import { Button, Form, Input, notification} from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React from 'react';





type FieldType = {
  username?: string;
  number?: string;
  adress?: string;
};

const OrderForm: React.FC<{close:()=>void, closeChild:()=>void, openNotification: ()=>void}> = ({close, closeChild, openNotification}) => {
     const dispatch = useAppDispatch();
    const {items, totalPrice} = useAppSelector((state)=> state.cart)
    const [username, setUserName] = React.useState<string>('')
    const [address, setAddress] = React.useState<string>('')
    const [phoneNumber, setPhoneNumber] = React.useState<string>('')

 


    
    const order = async ()=> {
   
      
         try {
            if (items.length>0 && username && address && phoneNumber) {

                const orderText =( items.map((item, i)=> {
                    return `№${i+1}. ID: ${item.id} Название: ${item.name} Цена:${item.price} Кол-во:${item.count}\n`
                }).join('') )  + `Общая сумма: ${totalPrice}`
            
               
            
             const res = await  $apiClient_CMS.post('/orders', {
                    data: {
                       username,
                       address,
                       phoneNumber,
                       orderText
                    }
                    
                })

                 
                if (res.status === 200 ) {
                setTimeout(openNotification, 500)  
                  dispatch(clearItems())
                  setUserName('')
                  setAddress('')
                  setPhoneNumber('')
                  closeChild()
                  close()
                   
                    
                }

            } else {
                return console.log('Корзина пуста')
            }
         } catch(e) {
            console.error(e)
         }
   
    } 
    





    return (
      
     
<Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    autoComplete="off"
    >
    

    <Form.Item<FieldType>
      label="Имя"
      name="username"
    >
      <Input onChange={(e)=> setUserName(e.target.value)} value={username} />
    </Form.Item>
    <Form.Item<FieldType>
      label="Телефон"
      name="number"
    >
      <Input onChange={(e=> setPhoneNumber(e.target.value))} value={phoneNumber} />
    </Form.Item>


    <Form.Item<FieldType>
      label="Адрес"
      name="adress"
    >
          <TextArea onChange={(e)=> setAddress(e.target.value)} value={address} rows={4} />

    </Form.Item>



   

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button onClick={order} type="primary" htmlType="submit">
        Отправить заявку
      </Button>
    </Form.Item>
  </Form>
  


    )
  
    };

export default OrderForm;