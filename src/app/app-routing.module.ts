import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
// import { ScheduleComponent } from './schedule/schedule.component';
import { SchedComponent } from './sched/sched.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'schedule', component: SchedComponent},
  { path: 'assessments',  component: AssessmentComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'notifs', component: NotificationsComponent},
  { path: 'account', component: AccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
