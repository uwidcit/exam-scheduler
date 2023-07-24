import { Component, OnInit } from '@angular/core';
// import { scheduler } from 'timers/promises';
import { Month, View } from '@syncfusion/ej2-angular-schedule';
import { DayService,WeekService, MonthService, MonthAgendaService, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import { Internationalization } from '@syncfusion/ej2-base';
import { defaultData } from './datasource';

@Component({
  selector: 'app-schedule',
  providers: [DayService, WeekService, MonthService, MonthAgendaService],
  template: '<ejs-schedule [currentView]="setView" [eventSettings]="eventSettings"></ejs-schedule>',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {  
  public setView: View = 'Month';
  // public selectedDate: Date = new Date(2023, 7, 24);
  public showWeekend: boolean = false;
  public eventSettings: EventSettingsModel = { dataSource: defaultData };

  constructor() { 
    
    // public setView: View = 'Month';
  }

  ngOnInit(): void {
  }

}