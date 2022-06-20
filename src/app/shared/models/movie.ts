export interface IMovie {
  tconst: string;
  titleType: 'short' | 'movie';
  primaryTitle: string;
  originalTitle: string;
  isAdult: boolean;
  startYear: string;
  endYear: string;
  runtimeMinutes: number;
  genres: string[];
}
