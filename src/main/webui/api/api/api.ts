export * from './greetingResource.service';
import { GreetingResourceService } from './greetingResource.service';
export * from './holidayResource.service';
import { HolidayResourceService } from './holidayResource.service';
export const APIS = [GreetingResourceService, HolidayResourceService];
