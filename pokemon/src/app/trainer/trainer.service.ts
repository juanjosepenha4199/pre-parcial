import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Trainer } from './Trainer';
import { TrainerDetailComponent } from './trainer-detail/trainer-detail.component';

@Injectable({
  providedIn: 'root',
})
export class TrainerService {
  private trainersUrl = 'https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2024-20%20Pokemon/trainers.json';
  private trainerDetailUrl = 'https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2024-20%20Pokemon/';

  constructor(private http: HttpClient) {}

  getTrainers(): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(this.trainersUrl).pipe(
      catchError(this.handleError)
    );
  }

  getTrainerDetail(id: number): Observable<TrainerDetailComponent> {
    return this.http.get<TrainerDetailComponent>(`${this.trainerDetailUrl}${id}/trainers.json`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('Error occurred:', error);
    return throwError(() => new Error('An error occurred; please try again later.'));
  }
}
