import { Routes } from '@angular/router';
import { HolidayFormComponent } from './components/holiday-form.component/holiday-form.component';
import { HolidayComponent } from './components/holiday.component/holiday.component';
import {HolidayEditComponent} from './components/holiday-edit.component/holiday-edit.component';

export const routes: Routes = [
  { path: '', redirectTo: 'holidays', pathMatch: 'full' },
  { path: 'addHoliday', component: HolidayFormComponent },
  { path: 'holidays', component: HolidayComponent },
  { path: 'editholiday', component: HolidayEditComponent },
];
