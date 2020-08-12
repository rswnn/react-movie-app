export interface ListMovie {
  results: ResultEntity[];
  total_pages: number;
  loading: boolean;
}
export interface ResultEntity {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
}
