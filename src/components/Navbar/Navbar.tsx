import React, { FC } from "react";
import styles from './Navbar.module.scss';
import Link from "next/link";
import { Avatar, Button, FormControl, TextField } from "@mui/material";
import Image from "next/image";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { AvatarSettings } from "./AvatarSettings";
import Logo from '/public/images/Movies.png'
import { NavbarProps } from "@/types/NavbarProps";
import { List } from "../List/List";
import ListGenre from "../ListGenre/ListGenre";

const Navbar: FC<NavbarProps> = ({children}) => {
    return (
      <div>
          <div className={styles.main}>
              <div className={styles.left_menu}>
                  <Image src={Logo} alt="logo" className={styles.logoImage} width={100} height={70}/>
                  <div className={styles.choice}>
                      {List.map(page => (
                          <div key={page.id} className={styles.card}>
                              <Image src={page.img} alt={page.id} className={styles.iconImage} width={35} height={35}/>
                              <Link href={`/${page.path}`}>
                                  <h2>{page.name}</h2>
                              </Link>
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
                      <div className={styles.avatar}>
                          <Avatar/>
                          <div className={styles.avatarContent}>
                              {AvatarSettings.map(menu => (
                                  <div key={menu.id}>
                                      <p>{menu.text}</p>
                                  </div>
                              ))}
                          </div>
                      </div>
                      <NotificationsIcon sx={{fontSize: 45, color: 'white'}}/>
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