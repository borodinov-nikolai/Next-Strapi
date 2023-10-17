'use client'
import {EditOutlined} from '@ant-design/icons'
import styles from './editInfo.module.scss'

import React from 'react'

const EditInfo : React.FC<any> = ({user}) => {


    console.log(user)

  return (
    <div>
      <ul className={styles.userinfo_list} >
          <li className={styles.name} >
            <div>Имя: {user.name}</div>
            <EditOutlined />
            </li>
          <li>
            <div>Фамилия: {user.surname} </div>
            <EditOutlined />
            </li>
          <li>
            <div>Адрес: {user.address}</div>
            <EditOutlined />
            </li>
          <li>
            <div>Телефон: {user.phone}</div>
            <EditOutlined />
            </li>
        </ul>
    </div>
  )
}

export default EditInfo