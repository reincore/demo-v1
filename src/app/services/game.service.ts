import { GameDataResponse } from '../models/game-data-response.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GameService {
  private readonly gamesUrl =
    'https://5b96285652764b001413bbd1.mockapi.io/api/data';

  constructor(private http: HttpClient) {}

  public getGames(): Observable<GameDataResponse[]> {
    return this.http
      .get<GameDataResponse[]>(this.gamesUrl)
      .pipe(catchError(this.handleError<GameDataResponse[]>('getGames', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
