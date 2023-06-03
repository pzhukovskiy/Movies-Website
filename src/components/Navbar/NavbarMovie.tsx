import React, { FC } from 'react';
import styles from './NavbarMovie.module.scss';
import Logo from '/public/images/Movies.png'
import { Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { NavbarProps } from '@/types/NavbarProps';
import { List } from '../List/List';

const NavbarMovie: FC<NavbarProps> = ({children}) => {
  return (
    <div>
        <div className={styles.main}>
            <div className={styles.left_menu}>
                <Image src={Logo} alt="logo" className={styles.logoImage} height={70} width={100}/>
                <div className={styles.choice}>
                    {List.map(page => (
                        <div key={page.id} className={styles.card}>
                            <Image src={page.img} alt={page.id} className={styles.iconImage} height={35} width={35}/>
                            <Link href={`/${page.path}`}>
                                <h2>{page.name}</h2>
                            </Link>
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