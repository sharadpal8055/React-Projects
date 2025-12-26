import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsaction } from "../store/items";
import { fetchActions } from "../store/Fetchitems";
import ItemDisplay from "./ItemDisplay";

const Home = () => {
  const items = useSelector((state) => state.items);


  return (
    <main>
      <div className="items-container">
        {items.map((item) => (
          <ItemDisplay key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Home;
