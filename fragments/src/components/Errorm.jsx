import React from 'react'

const Errorm = ({items}) => {
  return (<>
    <div>Error</div>
    {items.length===0 && <div><h1>hungry</h1></div> }
    
   
   </>
  )
}

export default Errorm