import {HomeOutlined,PhoneOutlined,AppstoreOutlined} from '@ant-design/icons';
import Link from 'next/link';
import styles from './MobileNavbar.module.scss'
import Auth from "./auth"



const MobileNavbar: React.FC<any> = ({cart, user}) => {


  return (
  
     
<nav className={styles.root}>
<ul className={styles.menu} >

<li className={styles.item}>
  <Link href={'/'}>
  <div>
        <HomeOutlined />
          <div>Главная</div>
          </div>
  </Link>
        
      </li>
<li className={styles.item}>
  <Link href={'/contacts'}>
        <div>
        <PhoneOutlined />
          <div>Контакты</div>
          </div>
          </Link>
      </li>
<li className={styles.item}>
        <Link href={'/catalog/smartphones'}> 
          <div>
          <AppstoreOutlined />
            <div>Каталог</div>
            </div>
        </Link>
      </li>
<li className={styles.item}>
        <div>
        {cart}
          <div>Корзина</div>
          </div>
      </li>
<li className={styles.item}>
        <div>
         <Auth user={user}/>
       
          </div>
      </li>
     
     </ul>
</nav>
    
 )
};

export default MobileNavbar;