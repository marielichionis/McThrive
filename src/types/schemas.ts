export interface Assignment {
  id: number;
  name: string;
}

export interface Course {
  id: number;
  name: string;
  assignments: Assignment[];
}
