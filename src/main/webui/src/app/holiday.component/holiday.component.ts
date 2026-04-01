import { Component } from '@angular/core';
import {HolidayDTO, HolidayResourceService} from '../../../api';

@Component({
  selector: 'app-holiday.component',
  imports: [],
  templateUrl: './holiday.component.html',
  styleUrl: './holiday.component.css',
})
export class HolidayComponent {
  holidays: HolidayDTO[] = [];
constructor(private holidayService: HolidayResourceService ) {

}
}
