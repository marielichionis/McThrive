import { useState } from "react";
import { boolean } from "zod";
import type { Assignment, Course } from "../types/schemas";

// Assignments

export default function CourseAssignments({
  course,
  onAddAssignment,
}: {
  course: Course;
  onAddAssignment: (newAssignment: Assignment, courseToUpdate: Course) => void;
}) {
  const [newAssignment, setNewAssignment] = useState("");

  //helper function
  function addAssignment() {
    const item: Assignment = {
      id: Math.floor(Math.random() * 1000),
      name: newAssignment,
      status: false,
    };

    setNewAssignment("");
    onAddAssignment(item, course);
  }

  return (
    <div>
      <ul>
        {course.assignments.map((assignment) => (
          <li key={assignment.id}>
            <input
              type="checkbox"
              onChange={(e) => {
                e.target.value;
              }}
            />
            {assignment.name}
          </li>
        ))}
      </ul>

      <div className="border-10 box-border flex gap-4">
        <input
          type="text"
          placeholder="Add an assignment" // what displays on the textbox
          value={newAssignment}
          onChange={(e) => setNewAssignment(e.target.value)}
        />

        <button onClick={() => addAssignment()}>Add</button>
      </div>
    </div>
  );
}

// What a course will be like

// progress bar of overall class

// list assignments

// assignment progress bar

//input how much time u spent on each assignment (presentation purpose)

// timer that track how much time u spend

// if u input time, it will add to whatever time u did on the stopwatch
