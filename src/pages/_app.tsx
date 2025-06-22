import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";

import "@/styles/globals.css";
import "@/styles/locomotive-scroll.css";

import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  display: "swap",
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div lang={"en"} className={dmSans.className}>
      <Head>
        <title>Vijay Jagdale - Portfolio</title>
        <meta name="description" content="The portfolio of Vijay Jagdale, a software engineer specializing in Java, Python, and machine learning." />
      </Head>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
