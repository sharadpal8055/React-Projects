import React from 'react'


const Container = ({ children }) => {
  return (
   <center>
    <div className="container">
      {children}
    </div>
    </center>
  );
};


export default Container