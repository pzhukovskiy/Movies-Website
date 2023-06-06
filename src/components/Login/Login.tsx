import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";
import LoginIcon from "../../Imgs/LoginIcon.png";
import LoginImage from "../../Imgs/LoginImage.png";
import { Button, Checkbox, FormControlLabel, FormGroup, Input } from "@mui/material";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import LoginImageBg from "./LoginImageBg";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import { fetchDataId } from "../api/fetchData";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Database/firebase";
import { User } from 'firebase/auth';
 
const Login = () => {

  const [authUser, setAuthUser] = useState<User | null>(null);
  const emailElement = useRef<HTMLInputElement>(null);
  const passwordElement = useRef<HTMLInputElement>(null);

  const inputs = document.querySelectorAll('input');
  const email = inputs[0]?.value;
  const password = inputs[1]?.value;

  const navigate = useNavigate();

  const { data, isError, isLoading } = useQuery({
    queryKey: ["Login"],
    queryFn: () => fetchDataId(878361),
  });

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if(user) {
        setAuthUser(user);
      }
      else {
        setAuthUser(null)
      }
    });

    return () => {
      listen();
    }
  }, [])

  if (isError) return <h1>Error</h1>;
  if (isLoading) return <Loading />;

  const loginUser = (e: any) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate('/Home');
      })
      .catch((error) => {
        toast.error('Uncorrect values', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      })
  };

  return (
    <div>
      <div className={styles.all}>
        <div className={styles.form}>
          <div className={styles.logo}>
            <img src={LoginIcon} alt="logIcon" />
            <img src={LoginImage} alt="regImage" />
          </div>
          <h1>Welcome back, {authUser?.displayName ? authUser?.displayName : "User"}</h1>
          <p>Welcome back! Please enter your details.</p>
          <form style={{ marginTop: 25 }} className={styles.field} onSubmit={loginUser}>
            <Input placeholder="Email" type="email" style={{ width: 300, marginBottom: 25 }} ref={emailElement}/>
            <Input placeholder="Password" type="password" style={{ width: 300, marginBottom: 25 }} ref={passwordElement}/>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remember me for 30 days"
                style={{ marginBottom: 15 }}
              />
            </FormGroup>
            <Button variant="contained" type="submit">
              Log in
            </Button>
          </form>
          <p style={{ marginTop: 25 }}>
            Don’t have an account ?
            <Link to={"/Registration"}>Sign up for free</Link>
          </p>
          <ToastContainer/>
        </div>
        <LoginImageBg data={data} />
      </div>
    </div>
  );
};

export default Login;