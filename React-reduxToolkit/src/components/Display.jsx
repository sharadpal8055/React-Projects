import React from 'react'
import { useSelector } from 'react-redux'

const Display = () => {
 const {countval}= useSelector(state=>state.count)

  return (
   <p className="card-text">counter value:{countval}</p>
  )
}

export default Display