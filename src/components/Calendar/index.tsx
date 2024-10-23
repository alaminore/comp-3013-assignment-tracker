import "react-day-picker/style.css";
import classNames from "react-day-picker/style.module.css";
import styles from "./calendar.module.css"
import { DayPicker } from "react-day-picker";
import { useAssignmentContext } from "../../helpers/context";


export function MyDatePicker() {
    const { assignmentDate, setAssignmentDate } = useAssignmentContext();

    console.log(classNames);

    return (
        <div className={styles.calendarBox}>
            <DayPicker
            classNames={classNames}
            mode="single"
            selected={assignmentDate}
            onSelect={setAssignmentDate}
            footer={
                assignmentDate ? `Selected: ${assignmentDate.toLocaleDateString()}` : "Pick a day."
            }
            />
        </div>
    );
}