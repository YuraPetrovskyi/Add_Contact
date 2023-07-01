import React from "react";

export const ContactForm = (props) => {
  const handleChangeName = ({target}) => {
    props.setName(target.value);
  }
  const handleChangePhone = ({target}) => {
    props.setPhone(target.value);
  }
  const handleChangeEmail = ({target}) => {
    props.setEmail(target.value);
  }


  return (    
    <form onSubmit={props.handleSubmit}>
      <input type="text" placeholder="contact name" value={props.name} onChange={handleChangeName} />
      <input type="tel"  placeholder="contact phone" value={props.phone} onChange={handleChangePhone} />
      <input type="email" placeholder="email" value={props.email} onChange={handleChangeEmail}/>
      <input type="submit" value="Add contact :)"/>
    </form>    
  );
};

