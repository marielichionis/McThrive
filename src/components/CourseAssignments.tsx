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
              className="py-3"
              type="checkbox"
              onChange={(e) => {
                e.target.value;
              }}
            />
            {assignment.name}
          </li>
        ))}
      </ul>

      <div className="flex gap-4">
        <input
          className="bg-transparent font-semibold"
          type="text"
          placeholder="Add an assignment" // what displays on the textbox
          value={newAssignment}
          onChange={(e) => setNewAssignment(e.target.value)}
        />

        <button
          className="rounded bg-violet-500 py-2 px-4 font-bold text-white hover:bg-violet-700"
          onClick={() => addAssignment()}
        >
          Add
        </button>
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
