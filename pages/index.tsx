
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pymes  from "@/components/Pymes";
import Footer  from "@/components/Footer";
import Integrate from "@/components/Integrate";
import Platforms from "@/components/Platforms";
import FAQ from "@/components/FAQ";
import Aliados from "@/components/Aliados";
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';


import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  // @ts-ignore
  return (
<>
  <Head>
    <title>Petal - Crédito comercial sin intereses para Pymes</title>
    <meta name="description" content="Infraestructura financiera que ayuda a crecer las Pymes en Latam." />
    <meta name="keywords" content="Crédito sin intereses, infraestructura financiera, Pymes, B2B" />
    <link rel="icon" href="/FaviconPetal.svg" />
  </Head>

    <Navbar/>
    <Hero/>
    <Pymes/>
    <Platforms/>
    <FAQ/>
    <Aliados/>
    <Integrate/>
    <Footer/>
    <Analytics />

</>
  )
}
