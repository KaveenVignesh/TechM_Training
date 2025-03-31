import React from "react";
import ReactDOM from "react-dom/client";

function StudentList() {
  const students = [
    { name: "Arjun", department: "Computer Science" },
    { name: "Meera", department: "Electronics" },
    { name: "Rahul", department: "Mechanical" },
    { name: "Ananya", department: "Civil" }
  ];

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.name} - {student.department}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList