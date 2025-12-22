import { createStore } from 'redux';
const initialval = {
  count: 5,
  privacy:false
};

const reducer = (store = initialval, action) => {
  let newstore = store;
  if (action.type === "INCREMENT") {
   
    
     return  {...store, count: store.count + 1}
    
  } else if (action.type === "DECREMENT") {

    
     return {...store, count: store.count - 1}
    
  }
   else if (action.type === "ADD") {

    
     return {...store, count: store.count + Number(action.payload.num)}
    
  }
   else if (action.type === "SUB") {

    
     return {...store, count: store.count - Number(action.payload.num)}
    
  }
   else if (action.type === "TOGGLE") {

    
     return {...store, privacy:!store.privacy}
    
  }
  return newstore;
};
const store = createStore(reducer);
export default store;
