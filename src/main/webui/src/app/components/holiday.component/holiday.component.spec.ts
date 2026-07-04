import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayComponent } from './holiday.component';
import { HolidayDTO, HolidayResourceService } from '../../../../api';
import {of} from 'rxjs';

describe('HolidayComponent', () => {
  let component: HolidayComponent;
  let fixture: ComponentFixture<HolidayComponent>;
  let holidayService: {
    apiHolidaysGet: jest.Mock
  }
  let holiday: HolidayDTO = {
    'id': 1,
    'name': 'Aachen',
    'description': 'coole Stadt',
  };

  beforeEach(async () => {
    holidayService = {
      apiHolidaysGet: jest.fn().mockReturnValue(of([holiday]))
    }
    await TestBed.configureTestingModule({
      imports: [HolidayComponent],
      providers: [{
        provide: HolidayResourceService,
        useValue: holidayService
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnInit', () => {
    expect(component.dataSource).toContain(holiday);
  });
});
