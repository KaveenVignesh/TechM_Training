import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:4500/students'; // JSON Server API URL
  private loggedInStudent: any = null;

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object // Inject PLATFORM_ID
  ) {}

  // Login method
  login(username: string, password: string): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (students) => {
        const student = students.find(
          (s) => s.username === username && s.password === password
        );
        if (student) {
          this.loggedInStudent = student;
          if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('loggedInStudent', JSON.stringify(student)); // Store user data
          }
          this.router.navigate(['/dashboard']);
        } else {
          alert('Invalid username or password.');
        }
      },
      (error) => {
        console.error('Error fetching student data:', error);
        alert('Failed to connect to the server. Please try again later.');
      }
    );
  }

  // Logout method
  logout(): void {
    this.loggedInStudent = null;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('loggedInStudent'); // Clear user data
    }
    this.router.navigate(['/login']);
  }

  // Check if a student is logged in
  isLoggedIn(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !!this.loggedInStudent || !!localStorage.getItem('loggedInStudent');
    }
    return false; // Return false in non-browser environments
  }

  // Get the logged-in student's data
  getLoggedInStudent(): any {
    if (this.loggedInStudent) {
      return this.loggedInStudent;
    }
    if (isPlatformBrowser(this.platformId)) {
      const student = localStorage.getItem('loggedInStudent');
      return student ? JSON.parse(student) : null;
    }
    return null; // Return null in non-browser environments
  }
}
