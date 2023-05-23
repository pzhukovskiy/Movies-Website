import React, { FC } from 'react';
import styles from './NavbarMovie.module.scss';
import './Navbar.scss';
import Logo from '../../Imgs/Movies.png';
import { pages } from '../../Pages/Pages';
import { NavLink} from 'react-router-dom';
import { NavbarProps } from '../../Types/NavbarPropsType';
import { Button } from '@mui/material';

const NavbarMovie: FC<NavbarProps> = ({children}) => {
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
                    <h3 className={styles.playMovie}>Play movie quizes and earn free tickets</h3>
                    <h3 className={styles.playMovieText}>50k people are playing now</h3>
                    <Button style={{marginLeft: 20}} variant='contained'>Play</Button>
                </div>
            </div>
            <div className={styles.center}>
                <div className={styles.allInfo}>
                    {children}
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavbarMovie