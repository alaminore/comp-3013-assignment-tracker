import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsCheckCircleFill } from "react-icons/bs";
// import { useAssignmentContext } from "../../helpers/context";
import { useStore, TAssignment } from "../../helpers/store";

//Setting the prop for this particular module. No need to put in the store :)
interface AssignmentProps {
  assignment: TAssignment;
}

// Our beautiful Assignment module export! 
export function Assignment({ assignment }: AssignmentProps) {

  const { setAssignmentList } = useStore(); // Switching to Zustand!

  const handleCompletion = () => {
    setAssignmentList((prevList: TAssignment[]) => {
      const updatedList = prevList.map((item: TAssignment) =>
        item.id === assignment.id
          ? { ...item, completed: !item.completed }
          : item
      );
      console.log("Updated list on completion: ", updatedList); 
      return updatedList; 
    });
  };

  const handleDelete = () => {
    setAssignmentList((prevList: TAssignment[]) => {
      const updatedList = prevList.filter(item => item.id !== assignment.id);
      console.log("Updated List on Delete:", updatedList); 
      return updatedList; 
    });
  };


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
