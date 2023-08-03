import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {OverlayModule} from '@angular/cdk/overlay';

//Start angular material components
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LoginComponent } from './login/login.component';
// import { ScheduleComponent } from './schedule/schedule.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentComponent } from './student/student.component';
import { LecturerComponent } from './lecturer/lecturer.component';
import { AdminComponent } from './admin/admin.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MenuComponent } from './menu/menu.component';
import { SchedComponent } from './sched/sched.component';

import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
//End angular material components
//Schedule imports
import { DayService, WeekService, MonthService, MonthAgendaService, ScheduleModule, ViewBase, YearService, AgendaService } from '@syncfusion/ej2-angular-schedule';
import { AccountComponent } from './account/account.component';

import { ToastAllModule } from '@syncfusion/ej2-angular-notifications';
import { DropDownButtonAllModule } from '@syncfusion/ej2-angular-splitbuttons';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { DropDownListAllModule, MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { MaskedTextBoxModule, UploaderAllModule } from '@syncfusion/ej2-angular-inputs';
import { ToolbarAllModule, ContextMenuAllModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonAllModule, CheckBoxAllModule, SwitchAllModule } from '@syncfusion/ej2-angular-buttons';
import { DatePickerAllModule, TimePickerAllModule, DateTimePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { NumericTextBoxAllModule, TextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { ScheduleAllModule, RecurrenceEditorAllModule } from '@syncfusion/ej2-angular-schedule';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

//End Schedule imports

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AssessmentComponent,
    DashboardComponent,
    StudentComponent,
    LecturerComponent,
    AdminComponent,
    MenuComponent,
    NotificationsComponent,
    AccountComponent,
    SchedComponent
  ],
  imports: [
    MatCheckboxModule,
    MatListModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    ScheduleModule, 

    CommonModule, 
    ScheduleAllModule, 
    RecurrenceEditorAllModule, 
    NumericTextBoxAllModule, 
    TextBoxAllModule, DatePickerAllModule, TimePickerAllModule, DateTimePickerAllModule, CheckBoxAllModule,   
    ToolbarAllModule, DropDownListAllModule, ContextMenuAllModule, MaskedTextBoxModule, UploaderAllModule, 
    MultiSelectAllModule,   TreeViewModule, ButtonAllModule, DropDownButtonAllModule, SwitchAllModule, ToastAllModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  // providers: [],
  providers: [DayService, WeekService, MonthService, MonthAgendaService, YearService, AgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }