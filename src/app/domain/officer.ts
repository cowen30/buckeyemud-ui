import { Person } from './person';

export interface Officer {
  id: number;
  person: Person;
  title: string;
  displayOrder: number;
  image?: string;
  raceString?: string;
}
