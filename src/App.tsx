import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";
import { TAssignment, AssignmentContext } from "./helpers/context";

function App() {
  const [assignmentList, setAssignmentList] = useState<TAssignment[]>([]);
  const [assignmentInput, setAssignmentInput] = useState<string>("");
  const [assignmentDate, setAssignmentDate] = useState<Date | undefined>(undefined);

  return (
    <>
      <AssignmentContext.Provider value={{ assignmentInput, assignmentList, setAssignmentInput, setAssignmentList, assignmentDate, setAssignmentDate}}>
        <Header />
        <Assignments />
      </AssignmentContext.Provider>
    </>
  );
}

export default App;
