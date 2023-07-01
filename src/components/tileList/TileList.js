import React from "react";
import {Tile} from '../tile/Tile' ;

export const TileList = (props) => {
  const handleClickRewey = () => {
    //console.log(props.contacts)
    console.log(props.contacts.map((object,index) => {
      console.log('object with index: ' + index);    
      console.log(object);
      return props.contacts
    }))}


  return (    
    <div>
      {/*<input type="submit" value='глянути в консоль шо там' onClick={handleClickRewey} /> */}     
      {props.contacts.map((object,index) => 
          <Tile object = {object} key = {index} />
        )
      }
    </div>
  );
};
