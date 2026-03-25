import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GameStateService {

  playerName$ = new BehaviorSubject<string>('');
  inBattle$ = new BehaviorSubject<boolean>(false);

  setPlayerName(name: string) {
    this.playerName$.next(name);
  }

  startBattle() {
    this.inBattle$.next(true);
  }

  endBattle() {
    this.inBattle$.next(false);
  }
}

export class ApiService {

  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/players`);
  }

  addPlayer(name: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/player`, { name });
  }
}
