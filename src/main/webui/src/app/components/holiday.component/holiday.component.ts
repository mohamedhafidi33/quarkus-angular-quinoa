import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import { HolidayDTO, HolidayResourceService } from '../../../../api';
import { Router } from '@angular/router';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from '@angular/material/table';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-holiday.component',
  imports: [
    MatTable,
    MatButton,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    MatCellDef,
    MatHeaderCellDef
  ],
  templateUrl: './holiday.component.html',
  styleUrl: './holiday.component.css',
})
export class HolidayComponent implements OnInit {
  holidays: WritableSignal<HolidayDTO[]> = signal([]);
  dataSource: WritableSignal<HolidayDTO[]> = signal([]);

  holidayService = inject(HolidayResourceService);
  router = inject(Router);

  ngOnInit() {
    this.holidayService.apiHolidaysGet().subscribe(data => {
      this.dataSource.set(data);
    });
  }
  displayedColumns: string[] = ['name', 'description', 'coverPath','actions'];

  protected editHoliday(element: HolidayDTO) {
    this.router.navigate(['/editholiday/']);
  }
}
