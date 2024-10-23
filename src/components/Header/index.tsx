import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { TAssignment, useAssignmentContext } from "../../helpers/context";
import { FaCalendarAlt, FaCalendarCheck } from "react-icons/fa";
import { MyDatePicker } from "../Calendar";
import { useState } from "react";

export function Header() {

  const { assignmentInput, setAssignmentInput, assignmentList, setAssignmentList, assignmentDate, setAssignmentDate } = useAssignmentContext();
  const [ calendarVisible, setCalendarVisible] = useState<Boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAssignmentInput(e.target.value);

  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (assignmentInput) { // This validation is probably unnecessary as the button is disabled, but better safe than sorry!
      const newAssignment: TAssignment = { // Creating a new assignment object from the form details
        id: crypto.randomUUID(),
        name: assignmentInput, // Setting the name as the input field
        completed: false, // I assume they haven't already completed them lol
        dueDate: assignmentDate // Will update when date-picker is added
      }

      setAssignmentList((previousList) => [...previousList, newAssignment]); // Update the assignmentList with the new list
      console.log(assignmentList);
      setAssignmentInput(""); // Clearing the input
      setCalendarVisible(false); // Hide the calendar if it is visible.
      setAssignmentDate(undefined); // Return the assignment date variable to undefined so the calendar icon updates.
    }
  }

  const toggleCalendar = () => { // Function to toggle the calendar visibility, woot woot
    setCalendarVisible(!calendarVisible);
  }


  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={handleSubmit}>
        <p>Assignment Name</p>
        <p>Due Date</p>
        <input 
          placeholder="Add a new assignment" 
          type="text" 
          value={assignmentInput} 
          onChange={handleInputChange} /> {/* Function to handle user input */}
        <span onClick={toggleCalendar}>{!assignmentDate ? <FaCalendarAlt /> : <FaCalendarCheck />}</span> {/* This changes the calendar once the date is set */}
        <button disabled={!assignmentInput}> 
          Create <AiOutlinePlusCircle size={20} />
        </button> 
      </form>
      {calendarVisible ? <MyDatePicker /> : undefined} {/* Toggle the visibility of the date picker */}
    </header>
  );
}
