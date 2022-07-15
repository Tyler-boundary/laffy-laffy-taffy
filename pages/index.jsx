import path from "path";
import fs from 'fs';

import Head from "next/head";
import Hero from "../components/Hero";
import Grid from "../components/Grid";
import {useEffect} from "react";
import { assignColors } from "../helpers";
import Contact from "../components/Contact";
import Main from "../components/Main";

const Home = ({gallery}) => {

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
      <Main image={gallery[0]}/>  
      <Grid gallery={gallery}></Grid>

    </>
  );

};

export const getStaticProps = async () => {

  let filenames;
  
  filenames = fs.readdirSync('public/laffytaffy');  
  
  return {
    props: {
      gallery: filenames
    },
  };

};


export default Home;
