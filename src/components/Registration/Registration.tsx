import React, { useState } from 'react';
import styles from './Registration.module.scss';
import RegistrationBg from '../../Imgs/RegistrationBg.png';
import RegistrationIcon from '../../Imgs/RegistrationIcon.png';
import RegistrationImage from '../../Imgs/RegistrationImage.png';
import { Button, Input } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Database/firebase';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!name || !email || !password) {

    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigate("/Home");
        })
        .catch((error) => {
          console.error(error);
        })
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
          <form style={{marginTop: 25}} className={styles.field} onSubmit={handleSubmit}>
            <Input placeholder='Name' type='text' style={{width: 300, marginBottom: 25}} value={name} onChange={(event: any) => setName(event.target.value)}/>
            <Input placeholder='Email' type='email' style={{width: 300, marginBottom: 25}} value={email} onChange={(event: any) => setEmail(event.target.value)}/>
            <Input placeholder='Password' type='password' style={{width: 300, marginBottom: 25}} value={password} onChange={(event: any) => setPassword(event.target.value)}/>
            <Button variant='contained' type='submit'>Create account</Button>
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
