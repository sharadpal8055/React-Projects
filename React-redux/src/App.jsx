import { useSelector } from "react-redux";
import "./App.css";
import Container from "./components/Container";
import Controller from "./components/Controller";
import Display from "./components/Display";
import Header from "./components/Header";
import Privacymessage from "./components/Privacymessage";

function App() {
  const privacy = useSelector((state) => state.privacy);
  return (
    <>
      <Container>
        <Header />
       {privacy? <Privacymessage />:
        <Display />}
        <Controller />
      </Container>
    </>
  );
}

export default App;
