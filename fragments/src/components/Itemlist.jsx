import React from 'react'
const fruits = ["Mango", "Apple", "Banana"];
const Itemlist = ({items}) => {
  return (<>
    <div>Itemlist</div>
      {
    items.map((item)=> <ul key={item} className="list-group">
  <li  className="list-group-item">{ item}</li>
 
</ul>)
   }
   </>
  )
}

export default Itemlist