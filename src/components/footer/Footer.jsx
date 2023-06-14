import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div className={styles.container}>
        <div>@2023 ReactApp All Rights Reserved</div>
        <div>
          <div className={styles.social}>
            <Image src="/1.png" className={styles.icon} width={15} height={15} />
            <Image src="/2.png" className={styles.icon} width={15} height={15} />
            <Image src="/3.png" className={styles.icon} width={15} height={15} />
            <Image src="/4.png"  className={styles.icon} width={15} height={15} />
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Footer;
