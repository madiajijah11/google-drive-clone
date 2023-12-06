import Head from "next/head";
import HomeComponent from "~/components/Home/index";

export default function Home() {
  return (
    <>
      <Head>
        <title>Google Drive Clone</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex-start flex min-h-screen items-center justify-center">
        <HomeComponent />
      </main>
    </>
  );
}
