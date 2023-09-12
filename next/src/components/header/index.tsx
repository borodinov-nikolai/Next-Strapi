import LeftNavbar from "./LeftNavbar"
import styles from './Header.module.scss'
import Auth from "./auth"
import Cart from "./cart"






const Header = ({user}:{user:any}) => {



  return (


    <div className="container">
        <div className={styles.root}>
          
          <LeftNavbar />
          <div className={styles.rightMenu} >
          
            <Cart user={user} />
           
           
            
          <Auth/>{user?.username}
          
            
          </div>
        </div >
    
        </div>
   
       
           
       

  )
}

export default Header