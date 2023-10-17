import React from 'react'
import styles from './account.module.scss'
import { getUser } from '@/services/serverApi'
import EditInfo from '@/components/AccountPage/editInfo';



const Account = async () => {
 
   const user = await getUser();
console.log(user)
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.username} >{user.username}</div>
        <div className={styles.userinfo} >Личная информация:</div>
       <EditInfo user={user} />
      </div>
      </div>
  )
}

export default Account