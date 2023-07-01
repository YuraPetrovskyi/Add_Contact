import React from "react";

export const ContactPicker = (props) => {
  const handleChange = ({target}) => {
    props.setContact(target.value);
  }

  return (    
    <select onChange={handleChange}>
      <option value="">No Contact Selected</option>
      {props.contacts.map((element, index)=> {
        return <option value={element.name} key={index}>{element.name}</option>
      })}
    </select>    
  );
};
