//header definition
  let nome="Ivan Guitimela"
  let role="Software Developer"
export default function Home() {
//Arrow functions
const mostraNome=()=>{
return nome
}
  return (
      <main >
<div className="flex items-center justify-center">
       <div>
        <p className="">{mostraNome()}<br/></p>
        <p>{role}</p>
      </div>
        <p>Desenvlvedor de softawere com paixao no desenvolvimento de interfaces bonitas e devidamente interativas</p>
 </div>
      </main>
      );
}
