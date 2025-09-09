//import Image from "next/image";
import Head from "next/head";
import React from 'react'
import Topo from  './components/Topo.tsx'

export default function Home(){
    
    return(
<div>
    <head>
        <link rel="icon" href="/file.svg" type="image/png" />
        <title>Personal Page</title>
    </head>
   <Topo/>
</div>
    );

}