import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css'],
})
export class GradesComponent implements OnInit {
  student: any = null;

  constructor(public authService: AuthService) {} // Make authService public

  ngOnInit(): void {
    this.student = this.authService.getLoggedInStudent();
    if (!this.student) {
      alert('Please log in to view your grades.');
      this.authService.logout();
    }
  }
}
