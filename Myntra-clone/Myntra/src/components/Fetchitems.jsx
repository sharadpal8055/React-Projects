import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchActions } from '../store/Fetchitems';
import { itemsaction } from '../store/items';

const Fetchitems = () => { 
  const dispatch=useDispatch()
const fetchstatus=useSelector((store)=>store.fetchStatus)
 useEffect(() => {
 
  if (fetchstatus.fetchdone) return;

  const controller = new AbortController();
  const signal = controller.signal;

  dispatch(fetchActions.markfetchstart());

  fetch("http://localhost:8080/items", { signal })
    .then(res => res.json())
    .then(({items}) => {
    dispatch(itemsaction.additems(items[0]));

      dispatch(fetchActions.markfetchdone());

    })
    .catch(err => {
      if (err.name !== "AbortError") {
        console.error(err);
      }
    })
    .finally(() => {
      dispatch(fetchActions.markfetchend());
    });

  return () => controller.abort();
}, [fetchstatus.fetchdone]);

   

  return (
    <div>
      {/* fetch done:{String(fetchstatus.fetchdone)}
    curently fetching:{String(fetchstatus.currentlyfetching)} */}
    
    </div>
  )
}

export default Fetchitems