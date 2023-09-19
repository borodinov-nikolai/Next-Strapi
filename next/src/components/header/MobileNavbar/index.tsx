import {HomeOutlined,PhoneOutlined,AppstoreOutlined} from '@ant-design/icons';
import Link from 'next/link';
import styles from './MobileNavbar.module.scss'



const MobileNavbar: React.FC<any> = ({cart, auth}) => {


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
         {auth}
          <div>Профиль</div>
          </div>
      </li>
     
     </ul>
</nav>
    
 )
};

export default MobileNavbar;