import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { CalendarComponent } from './calendar/calendar.component';


export const routes: Routes = [
    { path: 'tasks', component: TasksComponent },
    { path: 'calendar', component: CalendarComponent }
];
