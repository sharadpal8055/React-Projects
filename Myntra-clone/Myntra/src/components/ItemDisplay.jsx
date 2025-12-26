import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagsaction } from "../store/Bagitems";
const ItemDisplay = ({ item }) => {
  const bagitemsids = useSelector((store) => store.bags);
  console.log(bagitemsids);
  const dispatch = useDispatch();
  const handleaddtobag = (item) => {
    dispatch(bagsaction.additemstobag(item));
  };
  return (
    <div className="item-container">
      <img src={item.image} alt={item.item_name} />

      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>

      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>

      <div className="price">
        <span>Rs {item.current_price}</span>
        <span> Rs {item.original_price}</span>
        <span> ({item.discount_percentage}% OFF)</span>
      </div>

      {bagitemsids.includes(item.id) ? (
        <button type="button" className="btn btn-danger">
          Added to bag
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-success"
          onClick={() => handleaddtobag(item)}
        >
          Add to bag
        </button>
      )}
    </div>
  );
};

export default ItemDisplay;
