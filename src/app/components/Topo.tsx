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
<div className="flex items-center">
        <p className="flex text-xs">{mostraNome()}</p>
        <p>{role}</p>
 </div>
      </main>
      );
}
