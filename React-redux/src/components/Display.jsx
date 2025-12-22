import React from 'react'
import { useSelector } from 'react-redux'

const Display = () => {
 const count= useSelector(state=>state.count)

  return (
   <p className="card-text">counter value:{count}</p>
  )
}

export default Display