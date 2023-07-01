import React from "react";

export const Tile = (props) => {

  
  const description = Object.values(props.object);
  console.log(description);

  // const contact = description.map((value, index) => {    
  //   return <p >{value}</p>    
  // });
  const [title, ...rest] = description
  console.log(title);
  console.log(rest);


  return (
    <div className="tile-container">
      <p className="tile-title">{title}</p>
      {rest.map((element, index)  => {
        if (typeof element !== 'object') {
          return (
            <p className="tile" key={index}>{element}</p>                    
          )          
        }        
      })}      
    </div>
    
  );
};