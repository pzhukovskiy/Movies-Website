import React, { FC } from 'react'
import styles from '../styles/Navbar.module.scss'
import '../styles/Navbar.scss'
import Logo from '../imgs/Movies.png'
import { pages } from '../pages/pages'
import { NavLink} from 'react-router-dom'
import { NavbarProps } from '../types/types'
import { Avatar, FormControl, TextField } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar: FC<NavbarProps> = ({children}) => {
  return (
    <div>
        <div className={styles.main}>
            <div className={styles.left_menu}>
                <img src={Logo} alt="logo" className={styles.logoImage}/>
                <div className={styles.choice}>
                    {pages.map(page => (
                        <div key={page.id} className={styles.card}>
                            <img src={page.img} alt={page.id} className={styles.iconImage}/>
                            <NavLink to={`/${page.name}`}className={({ isActive }) => (isActive ? 'link-active' : 'link')}>
                                <h2>{page.name}</h2>
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.center}>
                <div className={styles.search}>
                    <FormControl sx={{width: '60vw', backgroundColor: 'white'}}>
                        <TextField id="search-field" placeholder='Search for movies, TV shows...'/>
                    </FormControl>
                </div>
                <div className={styles.allInfo}>
                    {children}
                </div>
            </div>
            <div className={styles.right_menu}>
                <div className={styles.person}>
                    <NotificationsIcon sx={{fontSize: 45, color: 'white'}}/>
                    <Avatar>H</Avatar>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar