import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPlayer } from '../../../interfaces/player';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OnlineStatusDirective } from '../../../directives/online-status/online-status.directive';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [OnlineStatusDirective, CommonModule, RouterModule],
  templateUrl: './players.component.html',
  styleUrl: './players.component.scss',
})
export class PlayersComponent implements OnInit {
  public players$: Observable<IPlayer[] | undefined> = of(undefined);

  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.players$ = this.apiService.getAllPlayers$();
  }

  public update(text: string) {}
}
