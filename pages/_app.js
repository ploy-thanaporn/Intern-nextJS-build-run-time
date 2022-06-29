import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title> Next.JS</title>
      </Head>
      <Nav />
      <div className="main-content">
        <Component {...pageProps} />
      </div>

      <Footer />
      {/* <style jsx>
        {`
          .main-content {
            margin-top: 30px;
          }
        `}
      </style> */}
    </div>
  );
}

export default MyApp;
