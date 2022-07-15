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
  
  if(fs){
    filenames = fs.readdirSync('public/laffytaffy')  
  }else{
    filenames = ['1_ (1).png', '1_ (10).png', '1_ (100).png', '1_ (101).png', '1_ (102).png', '1_ (103).png', '1_ (104).png', '1_ (105).png', '1_ (106).png', '1_ (107).png', '1_ (108).png', '1_ (109).png', '1_ (11).png', '1_ (110).png', '1_ (111).png', '1_ (112).png', '1_ (113).png', '1_ (114).png', '1_ (115).png', '1_ (116).png', '1_ (117).png', '1_ (118).png', '1_ (119).png', '1_ (12).png', '1_ (120).png', '1_ (13).png', '1_ (14).png', '1_ (15).png', '1_ (16).png', '1_ (17).png', '1_ (18).png', '1_ (19).png', '1_ (2).png', '1_ (20).png', '1_ (21).png', '1_ (22).png', '1_ (23).png', '1_ (24).png', '1_ (25).png', '1_ (26).png', '1_ (27).png', '1_ (28).png', '1_ (29).png', '1_ (3).png', '1_ (30).png', '1_ (31).png', '1_ (32).png', '1_ (33).png', '1_ (34).png', '1_ (35).png', '1_ (36).png', '1_ (37).png', '1_ (38).png', '1_ (39).png', '1_ (4).png', '1_ (40).png', '1_ (41).png', '1_ (42).png', '1_ (43).png', '1_ (44).png', '1_ (45).png', '1_ (46).png', '1_ (47).png', '1_ (48).png', '1_ (49).png', '1_ (5).png', '1_ (50).png', '1_ (51).png', '1_ (52).png', '1_ (53).png', '1_ (54).png', '1_ (55).png', '1_ (56).png', '1_ (57).png', '1_ (58).png', '1_ (59).png', '1_ (6).png', '1_ (60).png', '1_ (61).png', '1_ (62).png', '1_ (63).png', '1_ (64).png', '1_ (65).png', '1_ (66).png', '1_ (67).png', '1_ (68).png', '1_ (69).png', '1_ (7).png', '1_ (70).png', '1_ (71).png', '1_ (72).png', '1_ (73).png', '1_ (74).png', '1_ (75).png', '1_ (76).png', '1_ (77).png', '1_ (78).png', '1_ (79).png', '1_ (8).png', '1_ (80).png']
  }
  
  return {
    props: {
      gallery: filenames
    },
  };

};


export default Home;
