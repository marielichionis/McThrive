export interface Assignment {
  id: number;
  name: string;
  status: boolean;
}

export interface Course {
  id: number;
  name: string;
  assignments: Assignment[];
}
