import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayFormComponent } from './holiday-form.component';
import { HolidayResourceService } from '../../../../api';
import { of } from 'rxjs';
import { Router } from '@angular/router';

describe('HolidayFormComponent', () => {
  let component: HolidayFormComponent;
  let fixture: ComponentFixture<HolidayFormComponent>;
  let holidayResourceService: {
    apiHolidaysPost: jest.Mock;
  };
  let router = {
    navigate: jest.fn()
  };

  beforeEach(async () => {
    holidayResourceService = {
      apiHolidaysPost: jest.fn().mockReturnValue(of({}))
    };

    await TestBed.configureTestingModule({
      imports: [HolidayFormComponent],
      providers:[{
        provide: HolidayResourceService,
        useValue: holidayResourceService
      },
        {
          provide: Router,
          useValue: router
        }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidayFormComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call apiHolidaysPost onSubmit', () => {
    component.onSubmit();
    expect(holidayResourceService.apiHolidaysPost).toHaveBeenCalled();
    expect(holidayResourceService.apiHolidaysPost).toHaveBeenCalledTimes(1);
  });
});
