import React from 'react'

const Inputfood = ({handlekey}) => {
  return (
    <div>
<input type="text" placeholder='enter your food'
onKeyDown={handlekey} />

    </div>
  )
}

export default Inputfood