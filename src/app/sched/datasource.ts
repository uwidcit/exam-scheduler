
/**
 * Schedule datasource spec
 */

import { Calendar } from "@syncfusion/ej2-calendars";

export let defaultData: Object[] = [
    //months are off by 1 unsure to why
    {
        Id: 1,
        Subject: 'COMP 1601 Exam',
        Location: 'TLC A1',
        Description: 'Exam',
        StartTime: new Date(2023, 1, 7, 10, 0),
        EndTime: new Date(2023, 1, 7, 11, 30),
        IsAllDay: false,
        CalendarId: 1
    }, {
        Id: 2,
        Subject: 'COMP 2601 Exam',
        Location: 'FST C3',
        Description: 'Exam',
        StartTime: new Date(2023, 1, 15, 10, 0),
        EndTime: new Date(2023, 1, 15, 11, 30),
        IsAllDay: false,
        CalendarId: 2
    }, {
        Id: 3,
        Subject: 'COMP 3601 Exam',
        Location: 'TCB 32',
        Description: 'Exam',
        StartTime: new Date(2023, 1, 13, 12, 0),
        EndTime: new Date(2023, 1, 13, 14, 0),
        IsAllDay: false,
        CalendarId: 3
    },{
        Id: 4,
        Subject: 'COMP 1602 Exam',
        Location: 'TLC A1',
        Description: 'Exam',
        StartTime: new Date(2023, 1, 12, 10, 0),
        EndTime: new Date(2023, 1, 12, 12, 0),
        IsAllDay: false,
        CalendarId: 1
    }, {
        Id: 5,
        Subject: 'COMP 2602 Exam',
        Location: 'TCB 23',
        Description: 'Exam',
        StartTime: new Date(2023, 1, 15, 10, 0),
        EndTime: new Date(2023, 1, 15, 12, 0),
        IsAllDay: false,
        CalendarId: 2
    }, {
        Id: 6,
        Subject: 'COMP 3602 Exam',
        Location: 'C2',
        Description: 'Exam',
        StartTime: new Date(2023, 1, 11, 15, 0),
        EndTime: new Date(2023, 1, 11, 17, 0),
        IsAllDay: false,
        CalendarId: 3
    },{
        Id: 7,
        Subject: 'COMP 1603 Exam',
        Location: 'FST 114',
        Description: 'Exam',
        StartTime: new Date(2023, 1, 17, 8, 0),
        EndTime: new Date(2023, 1, 17, 10, 0),
        IsAllDay: false,
        CalendarId: 1
    }, {
        Id: 8,
        Subject: 'COMP 2603 Exam',
        Location: 'FST 113',
        Description: 'Exam',
        StartTime: new Date(2023, 1, 15, 10, 0),
        EndTime: new Date(2023, 1, 15, 12, 0),
        IsAllDay: false,
        CalendarId: 2
    }, {
        Id: 9,
        Subject: 'COMP 3603 Exam',
        Location: 'TCB 21',
        Description: 'Exam',
        StartTime: new Date(2023, 1, 13, 15, 0),
        EndTime: new Date(2023, 1, 13, 17, 0),
        IsAllDay: false,
        CalendarId: 3
    },{
        Id: 10,
        Subject: 'COMP 1603 A1',
        Location: '',
        Description: 'Assignment',
        StartTime: new Date(2023, 1, 5, 8, 0),
        EndTime: new Date(2023, 1, 17, 23, 59),
        IsAllDay: false,
        CalendarId: 1
    }, {
        Id: 11,
        Subject: 'COMP 2603 A2',
        Location: '',
        Description: 'Assignment',
        StartTime: new Date(2023, 1, 8, 10, 0),
        EndTime: new Date(2023, 1, 20, 23, 0),
        IsAllDay: false,
        CalendarId: 2
    }, {
        Id: 12,
        Subject: 'COMP 3603 A1',
        Description: 'Assignment',
        StartTime: new Date(2023, 1, 10, 15, 0),
        EndTime: new Date(2023, 1, 21, 23, 0),
        IsAllDay: false,
        CalendarId: 3
    },{
        Id: 13,
        Subject: 'COMP 1602 A2',
        Location: '',
        Description: 'Assignment',
        StartTime: new Date(2023, 1, 7, 8, 0),
        EndTime: new Date(2023, 1, 26, 23, 59),
        IsAllDay: false,
        CalendarId: 1
    }, {
        Id: 14,
        Subject: 'COMP 2602 A1',
        Location: '',
        Description: 'Assignment',
        StartTime: new Date(2023, 1, 14, 10, 0),
        EndTime: new Date(2023, 2, 2, 23, 0),
        IsAllDay: false,
        CalendarId: 2
    }, {
        Id: 15,
        Subject: 'COMP 3603 A2',
        Location: '',
        Description: 'Assignment',
        StartTime: new Date(2023, 1, 10, 15, 0),
        EndTime: new Date(2023, 1, 26, 23, 0),
        IsAllDay: false,
        CalendarId: 3
    },{
        Id: 130,
        Subject: 'TEST 1',
        Location: '',
        Description: '',
        StartTime: new Date(2023, 4, 17, 8, 0),
        EndTime: new Date(2023, 4, 17, 10, 0),
        IsAllDay: false,
        CalendarId: 1
    }, {
        Id: 140,
        Subject: 'TEST 2',
        Location: '',
        Description: '',
        StartTime: new Date(2023, 7, 15, 10, 0),
        EndTime: new Date(2023, 7, 15, 12, 0),
        IsAllDay: false,
        CalendarId: 2
    }, {
        Id: 150,
        Subject: ' TEST 3',
        Location: '',
        Description: '',
        StartTime: new Date(2023, 9, 13, 15, 0),
        EndTime: new Date(2023, 9, 13, 17, 0),
        IsAllDay: false,
        CalendarId: 3
    }
];