import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
import { useAssignmentContext } from "../../helpers/context";


export function Assignments() {

  const { assignmentList } = useAssignmentContext(); //Pulling in the context from our context support doc :)
  
  const completedAssignmentCount = () => { // Function to count how many assignments are completed
    return assignmentList.filter((assignment) => assignment.completed).length;
  };

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignmentList.length}</span>
        </div>
        <div>
          <p>Due Date</p>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p> 
          <span>{completedAssignmentCount()} of {assignmentList.length}</span> 
        </div>
      </header>

      <div className={styles.list}>
        {assignmentList.map((assignment) => (
          <Assignment key={assignment.id} assignment={assignment} />
        ))}
      </div>
    </section>
  );
}
