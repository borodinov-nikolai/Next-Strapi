'use client'
import styles from './editInfo.module.scss'
import {useRouter} from 'next/navigation'
import React from 'react'
import { editAccount } from '@/services/clientApi'

interface Props {
  user: {
    id: number
    username: string
    email: string
    provider: string
    confirmed: boolean
    blocked: boolean
    createdAt: string
    updatedAt: string
    name: string
    phone: string
    surname: string
    address: string
  }
 
}

const EditInfo : React.FC<Props> = ({user}) => {
const [type, setType] = React.useState<string>('')
const [value, setValue] = React.useState<string>('')
const router = useRouter();


const items = [{name: 'Имя:', typeName: 'name', defaultValue: user.name}, {name: 'Фамилия:',typeName: 'surname', defaultValue: user.surname},
{name: 'Адрес:',typeName: 'address', defaultValue: user.address},{name: 'Телефон: +7',typeName: 'phone', defaultValue: user.phone}]

  return (
    <div className={styles.root}>
      <ul className={styles.userinfo_list} >

        {
          items.map(({name, typeName, defaultValue}: { name: string, typeName:string, defaultValue: string})=> {
               return (
                <li key={typeName} className={styles.name} >
          
                <div>{name} { !(type === typeName)? defaultValue: <input onChange={(e)=>setValue(e.target.value)} defaultValue={defaultValue} type='text' onKeyDown={(e)=>{if(e.code == 'Enter'){editAccount(user.id, typeName, value, router, setType, setValue)}}}></input>}</div>
              { !(type===typeName)? <div onClick={()=>{setValue(defaultValue); setType(typeName)}} className={styles.edit}>изменить</div>:
              <div onClick={()=> editAccount(user.id, typeName, value, router, setType, setValue)} className={styles.edit}>сохранить</div>}
              </li>
               )
          })
        }
         
        
        </ul>
    </div>
  )
}

export default EditInfo