import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http'; // Add this if using HttpClient
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GradesComponent } from './pages/grades/grades.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './service/auth.guard';
import { GradeColorPipe } from './pipes/grade-color.pipe';
import{GpaFormatterPipe} from './pipes/gpa-format.pipe';
import { RankListComponent } from './pages/rank-list/rank-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    GradesComponent,
    ProfileComponent,
    LogoutComponent,
    GpaFormatterPipe,
    GradeColorPipe,
    RankListComponent,
    ],
  imports: [
    BrowserModule,
    HttpClientModule, // Add this if using HttpClient
    AppRoutingModule,
    FormsModule
    ],
  providers: [AuthService, AuthGuard, provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
