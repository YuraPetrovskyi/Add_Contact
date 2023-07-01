import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";


export const AppointmentForm = (props) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };  

  const handleTitleChange = ({target}) => {
    props.setTitle(target.value);
  }
  const handleDateChange = ({target}) => {
    props.setDate(target.value);
  }
  const handleTimeChange = ({target}) => {
    props.setTime(target.value);
  }

  return (
    <form onSubmit={props.handleSubmit}>
      <ContactPicker contacts = {props.contacts} contact={props.contact} setContact={props.setContact} />
      <input required type="text" placeholder="discription" value={props.title} onChange  = {handleTitleChange}/>
      <input required type="date" placeholder="date" value={props.date} min={getTodayString} onChange  = {handleDateChange}/>
      <input required type="time" placeholder="time" value={props.time} onChange  = {handleTimeChange}/>
      <input type="submit" value="Add appointment :)"/>
    </form> 
  );
};




// contacts,
// title,
// setTitle,
// contact,
// setContact,
// date,
// setDate,
// time,
// setTime,
// handleSubmit