import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";


export const metadata = {
    title: "Contact - Dot Dev",
    description: "This is Contact page right now",
  };

  
const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lets Keep in touch :)</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            className={styles.image}
            fill={true}
          />
        </div>

        <form className={styles.form}>
          <input
            type="text"
            placeholder="name"
            className={styles.input}
            name=""
            id=""
          />
          <input
            type="email"
            placeholder="email"
            className={styles.input}
            name=""
            id=""
          />
          <textarea
            cols="30"
            rows="10"
            className={styles.textarea}
            placeholder="message"
          ></textarea>
          <Button url="/" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
