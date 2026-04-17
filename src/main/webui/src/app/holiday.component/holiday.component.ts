import {Component, OnInit} from '@angular/core';
import {HolidayDTO, HolidayResourceService} from '../../../api';
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
  holidays: HolidayDTO[] = [];
  dataSource: HolidayDTO[] = [];

  constructor(private holidayService: HolidayResourceService) {}

  ngOnInit() {
    this.holidayService.apiHolidaysGet().subscribe(data => {
      this.dataSource = data;
      console.log(data.length);
    });
  }
  displayedColumns: string[] = ['name', 'description', 'coverPath'];
}
