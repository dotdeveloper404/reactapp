import Image from "next/image";
import React from "react";
import hero from "public/hero.png";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for you digital products</h1>
        <p className={styles.desc}>
          turning your idea into stability and thats enough god point{" "}
        </p>
        <Button url="/portfolio" text="See our works" />
      </div>

      <div className={styles.item}>
        <Image src={hero} alt="" className={styles.img} />
      </div>
    </div>
  );
};

export default Home;
