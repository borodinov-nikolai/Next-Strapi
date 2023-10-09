import styles from "./Header.module.scss";
import Auth from "./auth";
import Cart from "./cart";
import MobileNavbar from "./MobileNavbar";
import Link from "next/link";
import {Html5Outlined} from '@ant-design/icons'

const Header = ({ user }: { user: any }) => {
  return (
    <div className="container">
      <div className={styles.root}>
        
       
        <nav className={styles.navbar}>


          <ul className={styles.leftBlock}>
          <li  className={styles.logo}>
              <Link href="/">
              <Html5Outlined style={{fontSize: '28px'}} /> 
              <div style={{fontSize: '20px', fontFamily:'cursive'}} >Техно-Маркет</div>
              </Link>
            </li>
            <li>
              <Link href="/">
                <div>Главная</div>
              </Link>
            </li>
            <li className={styles.catalog} >
              <Link href="/catalog/smartphones">
                <div>Каталог</div>
              </Link>
             <ul className={styles.catalog_submenu} >
              <li>Смартфоны</li>
              <li>Планшеты</li>
             </ul>
            </li>
            <li>
              <Link href="/contacts">
                <div>Конаткты</div>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <div>О нас</div>
              </Link>
            </li>
          </ul>
       

        <ul className={styles.rightBlock}>
          <li><Cart user={user} /></li>
          <li> <Auth user={user} /></li>
          
         
        </ul>

      

        </nav>

        <div className={styles.mobileNavbar}>
          <MobileNavbar
            user={user}
            cart={<Cart user={user} />}
          />
        </div>

      </div>
    </div>
  );
};

export default Header;
