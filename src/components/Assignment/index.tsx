import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsCheckCircleFill } from "react-icons/bs";
import { TAssignment, useAssignmentContext } from "../../helpers/context";

interface AssignmentProps {
  assignment: TAssignment;
}


export function Assignment({ assignment }: AssignmentProps) {

  const { setAssignmentList } = useAssignmentContext();

  const handleCompletion = () => {
    setAssignmentList((prevList) =>
      prevList.map((item) =>
        item.id === assignment.id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  }

  const handleDelete = () => {
    setAssignmentList((prevList) => prevList.filter(item => item.id !== assignment.id));
  }


  return (

    <div className={styles.assignment}>
      <button className={ assignment.completed ? styles.checkContainerFill : styles.checkContainer } onClick={handleCompletion}>
      <div>
        {assignment.completed ? ( // If the assignment is complete, fill the circle
          <BsCheckCircleFill />
        ) : null }
    </div>
      </button>

      <p className={assignment.completed ? styles.textCompleted : undefined}> 
        {assignment.name}
      </p>
      <p>
        {assignment.dueDate ? assignment.dueDate.toLocaleDateString() : "No Due Date"}
      </p>

      <button className={styles.deleteButton} onClick={handleDelete}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
