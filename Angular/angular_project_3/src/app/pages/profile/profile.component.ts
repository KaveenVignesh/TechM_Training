import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  student: any = null;

  constructor(public authService: AuthService) {} // Make authService public

  ngOnInit(): void {
    this.student = this.authService.getLoggedInStudent();
    if (!this.student) {
      alert('Please log in to view your profile.');
      this.authService.logout();
    }
  }
}
