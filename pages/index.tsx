import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header";
import { LeftCol } from "../components/LeftCol";
import { MainContent } from "../components/MainContent";
import { RightCol } from "../components/RightCol";
import { Sidebar } from "../components/Sidebar";
import { Subnav } from "../components/Subnav";
import { Transactions } from "../components/Transactions";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>XPENCE</title>
        <meta name="description" content="Xpence to manage your expences" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex">
        <Sidebar>Sidebar</Sidebar>
        <MainContent>
          <Subnav />
          <div className="flex mt-2">
            <LeftCol>Left</LeftCol>
            <RightCol>
              <Transactions />
            </RightCol>
          </div>
        </MainContent>
      </main>
    </div>
  );
};

export default Home;
