import React from 'react'
import styles from './account.module.scss'
import { getUser } from '@/services/serverApi'
import SomeComponent from '@/components/someComponent';


const Account = async () => {
 
   const user = await getUser();
console.log(user)
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.username} >{user.username}</div>
        <div className={styles.userinfo} >Личная информация:</div>
        <div className={styles.name} >Имя: {user.name} <SomeComponent user={user} />  </div>
        <div>Фамилия: {user.surname}</div>
        <div>Адрес: {user.address}</div>
        <div>Телефон: {user.phone}</div>
      </div>
      </div>
  )
}

export default Account