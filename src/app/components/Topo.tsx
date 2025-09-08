export default function Home() {
//Arrow functions
const mostraNome=()=>{
  let nome="Ivan Gutinha"
  nome="Joao Gabriel"
return nome
}
  return (
      <main >
        <p>{mostraNome()}</p>
      </main>
      );
}
