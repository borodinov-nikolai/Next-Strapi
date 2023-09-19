import LeftNavbar from "./LeftNavbar"
import styles from './Header.module.scss'
import Auth from "./auth"
import Cart from "./cart"
import MobileNavbar from "./MobileNavbar"






const Header = ({user}:{user:any}) => {



  return (


    <div className="container">
        <div className={styles.root}>
          
          <div className={styles.leftMenu}>
            <LeftNavbar />
          </div>

          <div className={styles.rightMenu} >
          
            <Cart user={user} />
           
           
            
          <Auth user={user} />


            </div>
          
            
          <div className={styles.mobileNavbar}>
            <MobileNavbar auth={<Auth user={user}/>} cart={ <Cart user={user} />} />
          </div>
        </div >
    
        </div>
   
       
           
       

  )
}

export default Header