"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [name, setName] = useState("");

  const [error, setError] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // alert(name);

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;


    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name, email, password}),
      });

        if(response.status == 200) {
            router.push('/dashboard/login?success=account has been created')
        }
      
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          className={styles.input}
          name="username"
          required
          // onChange={(e)=>setName(e.target.value)}

        />
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
        <button className={styles.button}>Register</button>
      </form>
      {error && "error occured"}
      <Link href="/dashboard/login">Login with an existing account</Link>
    </div>
  );
};

export default Register;
