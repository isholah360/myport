/* eslint-disable no-unused-vars */
import React from "react";
import { Cv, Experience, Header, Nav, Blog, Portfolio, Service, Testimony, Footer } from "../../component";
import './home.css'


function Home() {

  return (
    <>
      <Header/>
      <Cv/>
      <Experience/>
      <Portfolio/>
      <Service/>
      <Testimony/>
      <Blog/>
      <Footer/>
    </>
  )
}

export default Home;
