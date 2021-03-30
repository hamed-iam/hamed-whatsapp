import { Button } from '@material-ui/core';
import Head from 'next/head';
import Image from 'next/image';
import { auth, provider } from '../firebase';
import styles from '../styles/Login.module.css';

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  return (
    <main className={styles.container}>
      <Head>
        <title>User Login</title>
      </Head>

      <div className={styles.loginContainer}>
        <Image
          className={styles.logo}
          src="/logo.png"
          alt="Logo"
          width="300"
          height="250"
        />
        <Button
          onClick={signIn}
          className={styles.button}
          variant="contained"
          color="primary"
        >
          با گوگل وارد شوید
        </Button>
      </div>
    </main>
  );
};

export default Login;
