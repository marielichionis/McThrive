import { useState } from "react";
import type { Assignment, Course } from "../types/schemas";
import CourseAssignments from "./CourseAssignments";

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
      <ul className="flex flex-col gap-4">
        {courses.map((course) => (
          <li key={course.id} className="flex gap-2">
            <h4 className="font-bold">{course.name}</h4>
            <CourseAssignments
              course={course}
              onAddAssignment={addAssignmentToCourse}
            />
          </li>
        ))}
      </ul>

      <div className="m-8">
        <input
          type="text"
          placeholder="Add a new class"
          value={newCourseDrop}
          onChange={(e) => setNewCourseDrop(e.target.value)}
        />

        <button onClick={() => addCourseDrop()}>Add</button>
      </div>
    </div>
  );
}
