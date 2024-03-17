import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPlayer } from '../interfaces/player';
import { delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getAllPlayers$() {
    return this.http
      .get<IPlayer[]>('/assets/mocks/players.json')
      .pipe(delay(1000));
  }

  public getPlayerById$(id: string) {
    return this.getAllPlayers$().pipe(
      map((players) => players.find((player) => player.id === id))
    );
  }

  public getPlayersByName$(name: string) {
    return this.getAllPlayers$().pipe(
      map((players) =>
        players.filter((player) =>
          player.name.toLowerCase().includes(name.toLowerCase())
        )
      )
    );
  }
}
