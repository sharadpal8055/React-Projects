import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagsaction } from "../store/Bagitems";
const Bagsummary = () => {
  const bgitemids = useSelector((store) => store.bags); //bagitems id
  const totalitems = useSelector((store) => store.items);
  const bagitems = totalitems.filter((items) => bgitemids.includes(items.id));
  let mrp = 0;
  let Discount = 100;
  let Convenience = 99;
  bagitems.map((items) => {
    mrp = mrp + items.original_price;
  });

  const item = {
    totalDiscount: Discount,
    totalItem: bgitemids.length,
    totalMRP: mrp,
    finalPayment: mrp - Discount + Convenience,
  };

  return (
    <>
      <div className="bag-summary">
        <div className="bag-details-container">
          <div className="price-header">
            PRICE DETAILS ({item.totalItem} Items){" "}
          </div>
          <div className="price-item">
            <span className="price-item-tag">Total MRP</span>
            <span className="price-item-value">₹{item.totalMRP}</span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Discount on MRP</span>
            <span className="price-item-value priceDetail-base-discount">
              -₹{item.totalDiscount}
            </span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Convenience Fee</span>
            <span className="price-item-value">₹99</span>
          </div>
          <hr />
          <div className="price-footer">
            <span className="price-item-tag">Total Amount</span>
            <span className="price-item-value">₹{item.finalPayment}</span>
          </div>
        </div>
        <button className="btn-place-order">
          <div className="css-xjhrni">PLACE ORDER</div>
        </button>
      </div>
    </>
  );
};

export default Bagsummary;
