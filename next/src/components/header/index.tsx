'use client'
import Link from 'next/link'
import styles from './Header.module.scss'
import {useRouter} from 'next/navigation'


const Header = () => {

  const router = useRouter()


  return (


<nav className={styles.root + " navbar navbar-expand-lg bg-body-tertiary"} >
<div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Переключатель навигации">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link className={styles.panel + " navbar-brand"} href="/">Панель навигации</Link>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/">Главная</Link>
        </li>
        <li className="nav-item">
          <Link onClick={()=>router.refresh()}  className="nav-link" href="/catalog">Каталог</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Цена</a>
        </li>
        <li className="nav-item dropdown" style={{marginLeft: "500px"}}>
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Личный кабинет
          </a>
          <ul className={styles.dropdown + " dropdown-menu"}>
            <li><Link href="/authorizathion" className="dropdown-item" >Авторизоваться</Link></li>
            <li><a className="dropdown-item" href="#">Зарегестрироваться</a></li>
            <li><a className="dropdown-item" href="#">Перейти в личный кабинет</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header