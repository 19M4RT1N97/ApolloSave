import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { Movie } from './Movie';
import { Schedule } from './Schedule';
import { Genre } from './Genre';
import { Category } from './Category';
import { CinemaHall } from './CinemaHall';
import { SeatRow } from './SeatRow';

@Injectable({
  providedIn: 'root'
})
export class ApolloService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(private http: HttpClient) {}
  private errorHandler(error: Error | any): Observable<any> {
    console.log(error);
    return of(null);
  } 
////MOVIE
  getAllMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(`${environment.server}/Movies`)
    .pipe(catchError(this.errorHandler));
  }

  getMovieById(movieId: number): Observable<Movie> {
    return this.http.get<Movie>(`${environment.server}/Movie/${movieId}`)
    .pipe(catchError(this.errorHandler));
  }

  updateMovie(data: string): Observable<any>{
    return this.http.put(`${environment.server}/Movie`, data, this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }

  createMovie(data: string): Observable<any>{
    return this.http.post(`${environment.server}/Movie`, data, this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }

  deleteMovie(id:number): Observable<any>{
    return this.http.delete(`${environment.server}/Movie/${id}`)
    .pipe(catchError(this.errorHandler));
  }

////SCHEDULE
  getSchedules(): Observable<Array<Schedule>> {
    return this.http.get<Array<Schedule>>(`${environment.server}/Schedules`)
    .pipe(catchError(this.errorHandler));
  }

  getScheduleById(id: number): Observable<Schedule> {
    return this.http.get<Schedule>(`${environment.server}/Schedule/${id}`)
    .pipe(catchError(this.errorHandler));
  }

  getAllSearchByTitle(title: string): Observable<Array<Schedule>>{
    return this.http.get<Array<Schedule>>(`${environment.server}/Schedules/Search/Title/${title}`)
    .pipe(catchError(this.errorHandler));
  }

  getAllSearchByDate(date: string): Observable<Array<Schedule>>{
    return this.http.get<Array<Schedule>>(`${environment.server}/Schedules/Search/Date/${date}`)
    .pipe(catchError(this.errorHandler));
  }

  getReservedPercantage(sid: number): Observable<number>{
    return this.http.get<number>(`${environment.server}/Schedule/Reserved/${sid}`)
    .pipe(catchError(this.errorHandler));
  }

  updateSchedule(data: string): Observable<any>{
    return this.http.put(`${environment.server}/Schedule`, data, this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }

  createSchedule(data: string): Observable<any>{
    return this.http.post(`${environment.server}/Schedule`, data, this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }

  deleteSchedule(id:number): Observable<any>{
    return this.http.delete(`${environment.server}/Schedule/${id}`)
    .pipe(catchError(this.errorHandler));
  }

/////GENRE
  getAllGenres(): Observable<Array<Genre>>{
    return this.http.get<Array<Genre>>(`${environment.server}/Genres`)
    .pipe(catchError(this.errorHandler));
  }
////Category
  getAllCategories(): Observable<Array<Category>>{
    return this.http.get<Array<Category>>(`${environment.server}/Categories`)
    .pipe(catchError(this.errorHandler))
  }

  getCategoryById(id: number): Observable<Category>{
    return this.http.get<Category>(`${environment.server}/Category/${id}`)
    .pipe(catchError(this.errorHandler))
  }

  updateCategory(data: string): Observable<any>{
    return this.http.put<Category>(`${environment.server}/Category`, data, this.httpOptions)
    .pipe(catchError(this.errorHandler))
  }

  createCategory(data: string): Observable<any>{
    return this.http.post(`${environment.server}/Category`, data, this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }

  deleteCategory(id:number): Observable<any>{
    return this.http.delete(`${environment.server}/Category/${id}`)
    .pipe(catchError(this.errorHandler));
  }


////CinemaHall
  getCinemaHalls(): Observable<Array<CinemaHall>>{
    return this.http.get(`${environment.server}/CinemaHalls`)
    .pipe(catchError(this.errorHandler));
  }

  getCinemaHallById(id: number): Observable<CinemaHall>{
    return this.http.get(`${environment.server}/CinemaHall/${id}`)
    .pipe(catchError(this.errorHandler));
  }

  updateCinemaHall(data: string): Observable<any>{
    return this.http.put<Category>(`${environment.server}/CinemaHall`, data, this.httpOptions)
    .pipe(catchError(this.errorHandler))
  }

  createCinemaHall(data: string): Observable<any>{
    return this.http.post(`${environment.server}/CinemaHall`, data, this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }

  deleteCinemaHall(id:number): Observable<any>{
    return this.http.delete(`${environment.server}/CinemaHall/${id}`)
    .pipe(catchError(this.errorHandler));
  }

//// SeatRow
 getRowsByHallId(id: number): Observable<Array<SeatRow>>{
    return this.http.get(`${environment.server}/SeatRow/${id}`)
    .pipe(catchError(this.errorHandler));
  }

  createSeatRow(data: string): Observable<any>{
    return this.http.post(`${environment.server}/SeatRow`, data, this.httpOptions).
    pipe(catchError(this.errorHandler));
  }

  deleteSeatRow(cid: number, srid: number): Observable<any>{
    return this.http.delete(`${environment.server}/SeatRow/${cid}/${srid}`).
    pipe(catchError(this.errorHandler));
  }

////Seat
  getSeatAmount(cid: number):Observable<number>{
    return this.http.get(`${environment.server}/Seat/${cid}`).
    pipe(catchError(this.errorHandler));
  }
  createSeats(data: string):Observable<any>{
    return this.http.post(`${environment.server}/Seat`, data, this.httpOptions).
    pipe(catchError(this.errorHandler));
  }

  deleteSeats(cid: number): Observable<any>{
    return this.http.delete(`${environment.server}/Seat/${cid}`).
    pipe(catchError(this.errorHandler));
  }
}
