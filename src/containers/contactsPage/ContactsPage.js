import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
const [name, setName] = useState('');
const [phone, setPhone] = useState('');
const [email, setEmail] = useState('');
const [duplicateName, setDuplicateName] = useState(false);

  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(duplicateName)
    if (duplicateName === true) {
      alert(`This name ${name} exist! Please write a new name!`)
      setName(''); // для обновлення стану      
      setDuplicateName(false);
    }
    if (duplicateName === false) {
      props.addContact(name, phone, email); //для додавання даних...
      setName(''); // для обновлення стану
      setPhone('');// для обновлення стану
      setEmail('');// для обновлення стану
    }
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  useEffect( () => {
    const dublicate = props.contacts.find((element) => {
      return element.name === name; // якщо умова збігається тоді повертає element, якщо не збігається повертає undefine
    })
    if (dublicate !== undefined) {
      setDuplicateName(true);
    }
  },[name])


  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contacts</h2> 
        <ContactForm handleSubmit={handleSubmit}
          name={name} setName={setName}
          phone={phone} setPhone={setPhone}
          email={email} setEmail={setEmail}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={props.contacts}/>
      </section>
    </div>
  );
};
