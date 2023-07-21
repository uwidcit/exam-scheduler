import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'schedule', component: ScheduleComponent},
  { path: 'assessments',  component: AssessmentComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'todos', component: TodoComponent },
  { path: 'notifs', component: NotificationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
