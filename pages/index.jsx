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
  }, [products]);

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

    const res = await fetch(endpoint+"?all=true&limit=100&offset=0");
    const data = await res.json()
    const {products} = data;
    return products;
    
  }

  async function requestProduct(id){

    try {

      // example ID = 5f267ee7-aaa1-4f7d-b9cf-776cdafe71db -> 844412 (each number is string.length of the split)

      const productId = id.toString().trim().replaceAll("'","").replaceAll('"',"");
      // const keys = productId.split("-");
      // let validCombination = "";

      // keys.forEach(key => validCombination += `${key.length}` )

      // if(validCombination === "844412"){
      //   const request = await fetch(endpoint.concat(`/${productId}`));
      //   const response = await request.json();
      //   return response.product;      
      // }

      // return {id};

      const request = await fetch(endpoint.concat(`/${id}`));
      const response = await request.json();
      return response.product;      

    } catch (error) {
      return {id};

    }
    
  }

  async function specificProducts(){

    let arrayProducts =  process.env.NEXT_PUBLIC_ARRAY_IDS.split(",");
    const allResponses = await Promise.all(arrayProducts.map(id => requestProduct(id)));
    return allResponses;
    
  }

  const [featured_product,products] = await Promise.all([featuredProduct(),specificProducts()]);
  return {
    props: {
      featuredProduct: featured_product,
      products
    },
  };

};


export default Home;
