"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {

  const session = useSession();

  const router = useRouter();

  const [error,setError] = useState(false);

  if(session.status === 'loading'){
    return <p>Loading...</p>
  }

  if(session.status === 'authenticated'){
      router?.push('/dashboard')
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try{
        signIn("credentials",{email,password})

    }catch(err){
      setError(true);
    }
  }

  return (
    <div className={styles.container}>
      {/* <button onClick={() => signIn("google")}>Login with Google</button> */}

      <form className={styles.form} onSubmit={handleSubmit}>
      
        <input
          type="email"
          placeholder="email"
          className={styles.input}
          name="email"
          id=""
          required
        />
        <input
          type="password"
          placeholder="password"
          className={styles.input}
          name="password"
          id=""
          required
        />
        <button className={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default Login;
