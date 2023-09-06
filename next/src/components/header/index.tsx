import { Avatar, Badge, Space } from "antd"
import LeftNavbar from "./leftNavbar"
import {UserOutlined, ShoppingCartOutlined} from '@ant-design/icons'
import styles from './Header.module.scss'






const Header = () => {
  return (
   
        <div className="container">
        <div className={styles.root}>
          
          <LeftNavbar />
          <div className={styles.rightMenu} >
            <Badge size='small' count={5}>

            <ShoppingCartOutlined style={{fontSize: '24px'}} />
            </Badge>
            <UserOutlined style={{fontSize: '24px'}}/>
          </div>
        </div >
        </div>
           
       

  )
}

export default Header