import { Routes } from '@angular/router';
import { HolidayFormComponent } from './holiday-form.component/holiday-form.component';
import { HolidayComponent } from './holiday.component/holiday.component';

export const routes: Routes = [
  { path: '', redirectTo: 'holidays', pathMatch: 'full' },
  { path: 'addHoliday', component: HolidayFormComponent },
  { path: 'holidays', component: HolidayComponent },
];
