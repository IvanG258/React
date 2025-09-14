import Head from "next/head";
//header definition
  var nome="Ivan Guitimela"
var role="Software Developer"
export default function Home() {
//Arrow functions
const mostraNome=()=>{
return nome
}
  return (
      <main >
           <head>
        <link rel="icon" href="/file.svg" type="image/png"/>
        <title>Ivan Guitimela</title>
    </head>
     {/* end of Head section*/}
<div className="flex items-center justify-center">
       <div className="block text-center ">
        <p className="">{mostraNome()}<br/></p>
        <p>{role}</p>
         <p>Desenvolvedor de software com paixao no desenvolvimento de interfaces bonitas e devidamente interativas</p>
         <button
         className="bg-white text-red-600 w-[150px] h-[20px]">Click me</button>
      </div>
 </div>
      </main>
      );
}
