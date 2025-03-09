import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../service/student.service';

@Component({
  selector: 'app-rank-list',
  templateUrl: './rank-list.component.html',
  styleUrls: ['./rank-list.component.css'],
})
export class RankListComponent implements OnInit {
  students: any[] = []; // List of all students
  filteredStudents: any[] = []; // Filtered list of students
  minGPA: number | null = null; // Minimum GPA for filtering
  maxGPA: number | null = null; // Maximum GPA for filtering

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.fetchStudents();
  }

  // Fetch all students from the service
  fetchStudents(): void {
    this.studentService.getStudentsRank().subscribe(
      (students) => {
        this.students = students.map((student) => ({
          ...student,
          gpa: this.calculateGPA(student.subjects),
        }));
        this.rankStudents(); // Rank students by GPA
        this.filteredStudents = [...this.students]; // Initialize filtered list
      },
      (error) => {
        console.error('Error fetching students:', error);
      }
    );
  }

  // Calculate GPA for a student
  calculateGPA(subjects: any[]): number {
    const gradePoints: { [key: string]: number } = {
      A: 4,
      B: 3,
      C: 2,
      D: 1,
      F: 0,
    };

    let totalPoints = 0;
    let totalSubjects = subjects.length;

    subjects.forEach((subject) => {
      totalPoints += gradePoints[subject.grade] || 0;
    });

    return totalPoints / totalSubjects;
  }

  // Rank students by GPA (descending order)
  rankStudents(): void {
    this.students.sort((a, b) => b.gpa - a.gpa);
  }

  // Filter students by GPA range
  filterStudents(): void {
    this.filteredStudents = this.students.filter((student) => {
      const gpa = student.gpa;
      return (
        (this.minGPA === null || gpa >= this.minGPA) &&
        (this.maxGPA === null || gpa <= this.maxGPA)
      );
    });
  }
}
