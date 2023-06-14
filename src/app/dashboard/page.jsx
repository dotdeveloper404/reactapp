"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import React, { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
import Image from "next/image";

const Dashboard = () => {
  //   const [data, setData] = useState([]);
  //   const [err, setErr] = useState(false);
  //   const [isLoading, setIsLoading] = useState(false);

  //   useEffect(() => {
  //     async function getData() {
  //       setIsLoading(true);

  //       const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`, {
  //         cache: "no-store",
  //       });

  //       if (!res.ok) {
  //         setIsLoading(false);
  //         throw new Error("failed to fetch data");
  //       }
  //       setIsLoading(false);

  //       const data = await res.json();
  //       setData(data);

  //     }

  //     getData();
  //   }, []);

  const session = useSession();

  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  // const { data, error, isLoading } = useSWR(
  //   "https://jsonplaceholder.typicode.com/posts/",
  //   fetcher
  // );

  const { data,mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  console.log(data);

  console.log(session);
  if (session.status === "loading") {
    return <p>Laoding...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleDelete = async(id)=>{
    try{
      await fetch(`/api/posts/${id}`,{
        method : "DELETE"
      })
    }
    catch(err){
      console.log(err);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts/", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading ? "loading" :  data?.map((post) => (
            <div className={styles.post} key={post._id}>
              <div className={styles.imgContainer}>
                <Image src={post.img} alt=""  width={200} height={100} />
              </div>

              <h2 className={styles.postTitle}>{post.title}</h2>
              <span onClick={()=>handleDelete(post._id)} className={styles.delete}>X</span>
            </div>
          ))}
        </div>

        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input
            type="text"
            placeholder="title"
            className={styles.input}
            name=""
            id=""
          />
          <input
            type="text"
            placeholder="Desc"
            className={styles.input}
            name=""
            id=""
          />
          <input
            type="text"
            placeholder="Image"
            className={styles.input}
            name=""
            id=""
          />
          <textarea
            placeholder="Content"
            className={styles.textArea}
            cols="30"
            rows="10"
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>

      </div>
    );
  }
};

export default Dashboard;
