import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from './Login.module.scss';
import LoginIcon from "../../imgs/LoginIcon.png";
import LoginImage from "../../imgs/LoginImage.png";
import { Button, Checkbox, FormControlLabel, FormGroup, TextField } from "@mui/material";
import axios from "axios";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import LoginImageBg from "./LoginImageBg";
import { ref, getDatabase, get, child } from "firebase/database";
import { userId } from "../Registration/Registration";

async function fetchData() {
  const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${493529}?api_key=377c8cc73ebe721a3c3500348ed77c5d&language=en-US`)
  return data
}

const Login = () => {

  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  useEffect(() => {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `users/user-${userId}`)).then((snapshot) => {
        if (snapshot.exists()) {
          setUser(snapshot.val());
        } else {
          console.log("No data");
        }
      }).catch((error) => {
        console.error(error);
      });
  }, [])

  const {data, isError, isLoading} = useQuery({
    queryKey: ['Login'],
    queryFn: fetchData
  })

  if (isError) return <h1>Error</h1>
  if (isLoading) return <Loading/>

  const loginUser = (e: any) => {
    const emailElement = document.getElementById('email');
    const passwordElement = document.getElementById('password');
    if (emailElement instanceof HTMLInputElement && passwordElement instanceof HTMLInputElement) {
      const email = emailElement.value;
      const password = passwordElement.value;

      const user = {
        'email': email,
        'password': password
      }

      const dbRef = ref(getDatabase());
      get(child(dbRef, `users/user-${userId}`)).then((snapshot) => {
        if (snapshot.exists()) {
          e.preventDefault();
          if(snapshot.val().email == user.email && snapshot.val().password == user.password) {
            navigate('/Home');
          }
          else {
            console.log("Bad user");
          }
        } else {
          console.log("Error");
        }
      }).catch((error) => {
        console.log(error);
      });
    } else {
      console.log("Error input value")
    }    
  }

  return (
    <div>
      <div className={styles.all}>
        <div className={styles.form}>
          <div className={styles.logo}>
            <img src={LoginIcon} alt="logIcon" />
            <img src={LoginImage} alt="regImage" />
          </div>
          <h1>Welcome back, {user.name.length ? user.name : 'User'}</h1>
          <p>Welcome back! Please enter your details.</p>
          <form style={{marginTop: 25}} className={styles.field}>
            <TextField id='email' label='Email' variant='standard' color='warning' type='email' style={{width: 300, marginBottom: 25}}/>
            <TextField id='password' label='Password' variant='standard' color='warning' type='password' style={{width: 300, marginBottom: 25}}/>
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me for 30 days" style={{marginBottom: 15}}/>
            </FormGroup>
            <Button variant="contained" onClick={loginUser} type="submit">Log in</Button>
          </form>
          <p style={{marginTop: 25}}>Don’t have an account ?  
            <Link to={'/Registration'}>
              Sign up for free
            </Link>
          </p>
        </div>
        <LoginImageBg data={data}/>
      </div>
    </div>
  );
};

export default Login;