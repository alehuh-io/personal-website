
import Head from 'next/head';
import Header from "../components/Header";
import Home from "../components/Home";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";


export default function App() {
  return (
    <>
      <Head>
          <title>Aleja&apos;s Portfolio</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"/>
      </Head>

      <Header />
      <main>
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </main>
      
    </> 
  );
}
