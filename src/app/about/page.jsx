import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital expeircnces
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Wo we are?</h1>
          <p className={styles.desc}>
            Lorem Ipsum dollr sit emete Lorem Ipsum dollr sit emete Lorem Ipsum
            dollr sit emete Lorem Ipsum dollr sit emeteLorem Ipsum dollr sit
            emeteLorem Ipsum dollr sit emeteLorem Ipsum dollr sit emeteLorem
            Ipsum dollr sit emete Lorem Ipsum dollr sit emeteLorem Ipsum dollr
            sit emete Lorem Ipsum dollr sit emeteLorem Ipsum dollr sit emete
            <br />
            <br />
            Lorem Ipsum dollr sit emeteLorem Ipsum dollr sit emete
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do</h1>
          <p className={styles.desc}>
            Lorem Lorem  sit emete Lorem Ipsum dollr 
            sit emeteLorem Ipsum dollr sit emete 
            LoremLorem Lorem LoremLorem Lorem 
            Lorem
            <br /> <br />
          </p>
          <Button url="contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
