import React from "react";
import Bagsummary from "./Bagsummary";
import Bagitem from "./Bagitem";
import { useSelector } from "react-redux";

const Bag = () => {
  const bgitemids = useSelector((store) => store.bags);
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          <Bagitem />
        </div>
        {bgitemids.length === 0 ? <h1>no items in the bag</h1> : <Bagsummary />}
      </div>
    </main>
  );
};

export default Bag;
