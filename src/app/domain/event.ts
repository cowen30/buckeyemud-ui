import { Moment } from 'moment-timezone';

export interface Event {
  id: number;
  event_name: string;
  location: string;
  date: Moment;
}
