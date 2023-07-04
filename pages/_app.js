import Layout from "@/components/Layout";
import "@/styles/globals.css";
import Nav from "@/components/Nav";

export default function App({ Component, pageProps }) {
  console.log("hello from app!")
  return (
    <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}
