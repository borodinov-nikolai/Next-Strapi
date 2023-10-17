import React from 'react'
import styles from './account.module.scss'
import { getUser } from '@/services/serverApi'
import EditInfo from '@/components/AccountPage/editInfo';



const Account = async () => {
 
   const user = await getUser();

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.username} > <span style={{fontSize: '28px'}}>Аккаунт пользователя:</span> {user.username}</div>
        <div className={styles.userinfo} >Личные данные:</div>
       <EditInfo user={user} />
      </div>
      </div>
  )
}

export default Account