import { createContext, useContext } from "react";

export type TAssignment = {
    id: string,
    name: string,
    completed?: boolean,
    dueDate?: Date;
  };

  export interface Props {
    assignmentInput: string;
    setAssignmentInput: React.Dispatch<React.SetStateAction<string>>;
    assignmentList: TAssignment[];
    setAssignmentList: React.Dispatch<React.SetStateAction<TAssignment[]>>;
    assignmentDate?: Date;
    setAssignmentDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  }

  export const AssignmentContext = createContext<Props | undefined>(undefined);

  export const useAssignmentContext = () => {
    const context = useContext(AssignmentContext);
    if (!context) {
        throw new Error("useAssignmentContext must be used.")
    }

    return context;
  };