import { GameDataResponse } from './models/game-data-response';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GameService {
  private gamesUrl = 'https://5b96285652764b001413bbd1.mockapi.io/api/data';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getGames(): Observable<GameDataResponse[]> {
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
