import { $apiClient_CMS } from '@/axios/clientConfig';
import { useAppSelector } from '@/redux/hooks';
import { Button, Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React from 'react';




type FieldType = {
  username?: string;
  number?: string;
  adress?: string;
};

const OrderForm: React.FC = ({close, close1}:any) => {
    const {items, totalCount, totalPrice} = useAppSelector((state)=> state.cart)
    const [username, setUserName] = React.useState<string>('')
    const [address, setAddress] = React.useState<string>('')
    const [success, setSuccess] = React.useState<boolean>(false)
    const [phoneNumber, setPhoneNumber] = React.useState<string>('')
 

    
    const order = async ()=> {

          
         try {
            if (items.length>0) {

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
                    setSuccess(true)
                    // setTimeout(()=>close1(), 4000);
                    // setTimeout(()=>close(), 4000);
                    // setTimeout(()=>setSuccess(false) , 4000);
                    
                }

            } else {
                return console.log('Корзина пуста')
            }
         } catch(e) {
            console.error(e)
         }
   
    } 
    



   if (success) {
    return <div>
        <div>Спсибо за заказ</div> <Button onClick={()=>{close1()}} type="primary" htmlType="submit">
        Ок
  </Button>
    </div>

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