import "react-day-picker/style.css";
import classNames from "react-day-picker/style.module.css";
import styles from "./calendar.module.css"
import { DayPicker } from "react-day-picker";
// import { useAssignmentContext } from "../../helpers/context";
import { useStore } from "../../helpers/store";


export function MyDatePicker() {
    const { assignmentDate, setAssignmentDate } = useStore(); // Zustand!

    const handleDateSelect = (date?: Date) => {
        if (date) {
            setAssignmentDate(date);
        }
    }

    return (
        <div className={styles.calendarBox}>
            <DayPicker
                classNames={classNames}
                mode="single"
                selected={assignmentDate}
                onSelect={handleDateSelect}
                footer={
                    assignmentDate ? `Selected: ${assignmentDate.toLocaleDateString()}` : "Pick a day."
                }
            />
        </div>
    );
}