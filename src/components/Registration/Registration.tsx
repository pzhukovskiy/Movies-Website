import React, { useState } from 'react';
import styles from './Registration.module.scss';
import RegistrationBg from '../../imgs/RegistrationBg.png';
import RegistrationIcon from '../../imgs/RegistrationIcon.png';
import RegistrationImage from '../../imgs/RegistrationImage.png';
import { Button, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { ref, update } from 'firebase/database';
import { database } from '../database/firebase';

export let userId: number = 0;

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const user = {
    name : name,
    email: email,
    password: password
  } 

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!name.length || !email.length || !password.length) {
    } else {
      const updates: {[key: string]: any} = {};
      userId += 1;
      updates[`users/user-${userId}`] = user;
      navigate('/Home');
      return update(ref(database), updates);
    }
  };
  
  return (
    <div>
      <div className={styles.all}>
        <div className={styles.regBg}>
          <div className={styles.logo}>
            <img src={RegistrationIcon} alt="regIcon" />
            <img src={RegistrationImage} alt="regImage" />
          </div>
          <img src={RegistrationBg} alt="regBg" className={styles.bg}/>
          <div className={styles.text}>
            <h1>Benefits of your free IMDb account</h1>
            <h3>Personalized Recommendations</h3>
            <p>Discover shows you'll love.</p>
            <h3>Your Ratings</h3>
            <p>Rate and remember everything you've seen.</p>
            <h3>Contribute to IMDb</h3>
            <p>Add data that will be seen by millions of people and get cool badges.</p>
          </div>
        </div>
        <div className={styles.form}>
          <h1>Create an account</h1>
          <p>Let’s get started with your 30 days free trial.</p>
          <form style={{marginTop: 25}} className={styles.field}>
            <TextField id='name' label='Name' variant='standard' color='warning' type='text' style={{width: 300, marginBottom: 25}} value={name} onChange={(event: any) => setName(event.target.value)}/>
            <TextField id='email' label='Email' variant='standard' color='warning' type='email' style={{width: 300, marginBottom: 25}} value={email} onChange={(event: any) => setEmail(event.target.value)}/>
            <TextField id='password' label='Password' variant='standard' color='warning' type='password' style={{width: 300, marginBottom: 25}} value={password} onChange={(event: any) => setPassword(event.target.value)}/>
            <Button variant='contained' type='submit' onClick={handleSubmit}>Create account</Button>
          </form>
          <p style={{marginTop: 25}}>Already have an account ? 
          <Link to={'/Login'}>Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
