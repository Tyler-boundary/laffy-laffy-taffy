import Head from "next/head";
import Hero from "../components/Hero";
import Grid from "../components/Grid";
import {useEffect} from "react";
import { assignColors } from "../helpers";
import Contact from "../components/Contact";
import Main from "../components/Main";

const Home = ({featuredProduct,products}) => {

  useEffect(() => {
    assignColors();
  }, []);

  return (
    <>

      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_TITLE}</title>
        <link rel="shortcut icon" href={`/${process.env.NEXT_PUBLIC_FAVICON}`} />
      </Head>
      
      <Hero />

      <Main featuredProduct={featuredProduct}/>
      
      <Grid products={products}/>

      <Contact />
      
    </>
  );

};

export const getServerSideProps = async () => {

  const endpoint = process.env.NEXT_PUBLIC_API_KEY;
  async function featuredProduct(){

    const res = await fetch(endpoint.toString().concat(`/${process.env.NEXT_PUBLIC_MAIN_FEATURED_PRODUCT ?? "2096389b-aa71-4f03-9cd0-242d6050e964" }`));
    const response = await res.json();
    const {product:featured_product} = response;
    return featured_product;

  }

  async function initialProducts(){
    const res = await fetch(endpoint+"?all=true&limit=12&offset=0");
    const data = await res.json()    
    return data;
  }

  const [featured_product,data] = await Promise.all([featuredProduct(),initialProducts()]);


  return {
    props: {
      featuredProduct: featured_product,
      products: data.products
    },
  };
};


export default Home;
