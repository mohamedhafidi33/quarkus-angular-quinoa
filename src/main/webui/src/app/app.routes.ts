import { Routes } from '@angular/router';
import { HolidayFormComponent } from './components/holiday-form.component/holiday-form.component';
import { HolidayComponent } from './components/holiday.component/holiday.component';

export const routes: Routes = [
  { path: '', redirectTo: 'holidays', pathMatch: 'full' },
  { path: 'addHoliday', component: HolidayFormComponent },
  { path: 'holidays', component: HolidayComponent },
];
