import Container from "./components/Container";
import { useState } from "react";
import Errorm from "./components/Errorm";
import Inputfood from "./components/Inputfood";
import Itemlist from "./components/Itemlist";

function App() {
  // const fruits = ["Mango", "Apple", "Banana"];
  // const foods = [
  //   "Roti",
  //   "Sabji",
  //   "Dal",
  //   "Fried Rice",
  //   "Paratha",
  //   "Rajma",
  //   "Chole",
  //   "Pulao",
  //   "Upma",
  //   "Poha",
  //   "Idli",
  //   "Dosa",
  //   "Kadhi",
  //   "Khichdi",
  //   "Paneer Masala",
  // ];
  const [fooditems, setfooditems] = useState([
    "Roti",
    "Sabji",
    "Dal",
    "Fried Rice",
  ]);

  const handlekey = (event) => {
    if (event.key === "Enter") {
      console.log("enter clicked");
      console.log(event.target.value);
      let newfooditem = event.target.value;
      event.target.value = "";
      let newmenu = [...fooditems, newfooditem];
      setfooditems(newmenu);
      console.log(fooditems);
    }
  };
  const [selecteditem, setselecteditem] = useState(null)
  const handlebuy = (item) => {
    console.log("buy clicked");
    setselecteditem(item)
  };
  // const fruits = [];

  return (
    <>
      <center>
        <Container>
          <Inputfood handlekey={handlekey} />
          <Itemlist items={fooditems} handlebuy={handlebuy} selecteditem={selecteditem} />
          <Errorm items={fooditems} />
        </Container>
      </center>
    </>
  );
}

export default App;
