import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";

const Home: NextPage = () => {
  // useState for data, useEffect for fetching data using axios
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const result = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + "/api/dashboard"
    );
    setData(result.data);
  };

  // useInterval to fetch data every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  console.log("Hello My django data: ", data);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>My Data Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center  px-20 text-center">
        <h1 className="text-xl font-bold">Welcome to My Dashboard </h1>
        <p className="border text-gray-500">Here we go...</p>
        {
          // map data
          data.map((item: any, index: any) => (
            <div className="flex" key={index}>
              <p className="px-2 border text-xl">Minute: {item.match_status}</p>
              <p className="px-2 border text-xl">Goal Pred: {item.goal_pred}</p>
            </div>
          ))
        }
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
