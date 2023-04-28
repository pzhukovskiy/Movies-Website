import React, { FC } from 'react'
import styles from './Navbar.module.scss'
import './Navbar.scss'
import Logo from '../../imgs/Movies.png'
import { pages } from '../../pages/pages'
import { NavLink} from 'react-router-dom'
import { NavbarProps } from '../../types/NavbarPropsType'
import { Avatar, Button, FormControl, TextField } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications'
import ListGenre from '../ListGenre/ListGenre'

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
                            <NavLink to={`/${page.path}`}className={({ isActive }) => (isActive ? 'link-active' : 'link')}>
                                <h2>{page.name}</h2>
                            </NavLink>
                        </div>
                    ))}
                </div>
                <div className={styles.quizes}>
                    <h3 style={{paddingTop: 35, color: '#E8E8E8CC', margin: 20}}>Play movie quizes and earn free tickets</h3>
                    <h3 style={{color: '#666666', margin: 20}}>50k people are playing now</h3>
                    <Button style={{marginLeft: 20}} variant='contained'>Play</Button>
                </div>
            </div>
            <div className={styles.center}>
                <div className={styles.search}>
                    <FormControl className={styles.searchInput}>
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
                <div className={styles.genre}>
                    <ListGenre/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar