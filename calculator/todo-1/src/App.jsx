import Appname from "./components/Appname";
import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import Display from "./components/Display";
import Keys from "./components/Keys";
function App() {
  const button=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
  const [calval, setcalval] = useState("")
  const onbuttonclick=(buttonText)=>{
if(buttonText==="C"){
  setcalval("");
}
else if(buttonText==="="){
  const result=eval(calval)
  setcalval(result);
}
else{

let newval=calval+buttonText;
setcalval(newval);
}

  }
  return (
    <>
      <center>
        <Container>
          <Appname />
          <Display calval={calval}/>
          <Keys buttons={button} onbuttonclick={onbuttonclick}/>
        </Container>
      </center>
    </>
  );
}

export default App;
