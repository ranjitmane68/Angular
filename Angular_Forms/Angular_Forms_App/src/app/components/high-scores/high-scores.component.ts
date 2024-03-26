import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { IPlayer } from '../../interfaces/player';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SortByScorePipe } from '../../pipes/sort-by-score/sort-by-score.pipe';

@Component({
  selector: 'app-high-scores',
  standalone: true,
  imports: [SortByScorePipe, CommonModule, RouterModule],
  templateUrl: './high-scores.component.html',
  styleUrl: './high-scores.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HighScoresComponent implements OnInit {
  public players$: Observable<IPlayer[] | undefined> = of(undefined);

  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.players$ = this.api.getAllPlayers$();
  }
}
