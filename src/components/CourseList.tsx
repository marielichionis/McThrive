import { useState } from "react";
import type { Assignment, Course } from "../types/schemas";
import CourseAssignments from "./CourseAssignments";

// Course ex: COMP202
export default function CourseList() {
  const [newCourseDrop, setNewCourseDrop] = useState("");
  const [courses, setCourses] = useState<Course[]>([]);

  function addCourseDrop() {
    const item: Course = {
      id: Math.floor(Math.random() * 1000),
      name: newCourseDrop,
      assignments: [],
    };

    setNewCourseDrop("");
    setCourses([...courses, item]);
  }

  function addAssignmentToCourse(
    newAssignment: Assignment,
    courseToUpdate: Course
  ) {
    const indexOfCourseToUpdate = courses.indexOf(courseToUpdate);

    const updatedCourse: Course = {
      ...courseToUpdate,
      assignments: [...courseToUpdate.assignments, newAssignment],
    };

    const updatedCourses = [
      // Items before the insertion point:
      ...courses.slice(0, indexOfCourseToUpdate),
      // New item:
      updatedCourse,
      // Items after the insertion point:
      ...courses.slice(indexOfCourseToUpdate),
    ];

    const courseWithoutOldOne = updatedCourses.filter(
      (course) => course !== courseToUpdate
    );

    setCourses(courseWithoutOldOne);
  }

  return (
    <div>
      <ul className="z-20 flex gap-4 py-4">
        {courses.map((course) => (
          <li
            key={course.id}
            className="flex justify-between gap-4 border" // space between class name and add assignment bar
          >
            <h4
              className="font-bold" //display of course
            >
              {course.name}
            </h4>
            <CourseAssignments
              course={course}
              onAddAssignment={addAssignmentToCourse}
            />
          </li>
        ))}
      </ul>

      <div className="flex rounded bg-cyan-100 shadow">
        <input // user input
          className="flex grow bg-transparent text-center font-semibold"
          type="text"
          placeholder="Add a new class"
          value={newCourseDrop}
          onChange={(e) => setNewCourseDrop(e.target.value)}
        />

        <button
          className="rounded bg-violet-500 py-2 px-4 font-bold text-white hover:bg-violet-700"
          onClick={() => addCourseDrop()}
        >
          Add
        </button>
      </div>
    </div>
  );
}
