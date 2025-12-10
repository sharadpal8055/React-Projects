import Errorm from "./components/Errorm";
import Itemlist from "./components/Itemlist";

function App() {
  //const fruits = ["Mango", "Apple", "Banana"];
  const fruits = [];

  return (<>
 
   <h1>props</h1>
  
  <Itemlist items={fruits}/>
 <Errorm items={fruits} />
 
</>
  )
}

export default App
