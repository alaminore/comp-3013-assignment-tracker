import { create } from 'zustand';

export type TAssignment = {
    id: string,
    name: string,
    completed?: boolean,
    dueDate?: Date;
  };

export interface StoreState {
    assignmentInput: string;
    setAssignmentInput: (input: string) => void;
    assignmentList: TAssignment[];
    setAssignmentList: (list: TAssignment[] | ((prevList: TAssignment[]) => TAssignment[])) => void;
    assignmentDate: Date | undefined;
    setAssignmentDate: (date: Date | undefined) => void;
  }

export const useStore = create<StoreState>((set) => ({
    assignmentInput: " ",
    setAssignmentInput: (input) => set({assignmentInput:input}),
    assignmentList: [],
    setAssignmentList: (list) => set((state) => ({ assignmentList: typeof list === 'function' ? list(state.assignmentList) : list })),
    assignmentDate: undefined,
    setAssignmentDate: (date) => set({ assignmentDate: date })
}));