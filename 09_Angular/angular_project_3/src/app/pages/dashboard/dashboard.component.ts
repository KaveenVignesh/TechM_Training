import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  student: any = null;
  gpa: number | null = null; // Variable to store GPA

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.student = this.authService.getLoggedInStudent();
    if (!this.student) {
      alert('Please log in to view your dashboard.');
      this.authService.logout();
    } else {
      this.calculateGPA(); // Calculate GPA when the component initializes
    }
  }

  // Method to calculate GPA
  calculateGPA(): void {
    const gradePoints: { [key: string]: number } = {
      A: 4,
      B: 3,
      C: 2,
      D: 1,
      F: 0,
    };

    let totalPoints = 0;
    let totalSubjects = this.student.subjects.length;

    // Calculate total grade points
    this.student.subjects.forEach((subject: any) => {
      totalPoints += gradePoints[subject.grade] || 0;
    });

    // Calculate GPA
    this.gpa = totalPoints / totalSubjects;
  }
}
