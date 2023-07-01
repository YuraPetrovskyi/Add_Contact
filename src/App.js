import React from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { useState } from "react";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([{
    name: ' ',
    phone: '',
    email: ''
  }]);

  const [appointments, setAppointments] = useState([{
      title: '',
      contact: {name: '', phone: '', email: ''},
      date: '',
      time: ''      
  }]);

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContact = (newname, newphone, newemail) => {
    setContacts((prevContacts) => {
      const newcontact = {
        name: newname,
        phone: newphone,
        email: newemail
      };
      return [...prevContacts, newcontact]
    })
  } 

  const addAppointments = (newtitle, newcontact, newdate, newtime) => {
    setAppointments((prevAppointments) => {
      const newAppointment = {
        title: newtitle,
        contact: newcontact,
        date: newdate,
        time: newtime
      };
      return [ ...prevAppointments,newAppointment]
    })
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addContact={addContact}/> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage contacts={contacts} appointments={appointments} addAppointments={addAppointments}/> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));

  return (
    <RouterProvider router={router}/>

  );
}

export default App;
