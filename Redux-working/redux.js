const redux=require('redux');
const initialvalue={
  count:0
}
const reducer=(store=initialvalue,action)=>{
let newstore=store;
if(action.type==='INCREMENT'){
  console.log('incremented successfully')
  newstore={count:store.count+1};
  console.log(newstore);
}
return newstore;
}
const store=redux.createStore(reducer);
const subscriber=()=>{
  const state=store.getState();
  console.log(state)
}
store.subscribe(subscriber)
store.dispatch({type:'INCREMENT'})