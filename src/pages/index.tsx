import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import CourseAssignments from "../components/CourseAssignments";
import CourseList from "../components/CourseList";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-cyan-400 sm:text-[5rem]">
          McThrive
        </h1>
        <CourseList />
      </main>
    </>
  );
};

export default Home;
