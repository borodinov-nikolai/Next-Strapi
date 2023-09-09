import LeftNavbar from "./LeftNavbar"
import styles from './Header.module.scss'
import Auth from "./auth"
import Cart from "./cart"






const Header = () => {
  return (

   
    <div className="container">
        <div className={styles.root}>
          
          <LeftNavbar />
          <div className={styles.rightMenu} >
          
            <Cart/>
           
            {/* <UserOutlined style={{fontSize: '24px'}}/> */}
            <Auth/>
          </div>
        </div >
    
        </div>
   
       
           
       

  )
}

export default Header