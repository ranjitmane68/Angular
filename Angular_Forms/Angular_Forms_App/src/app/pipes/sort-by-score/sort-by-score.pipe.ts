import { Pipe, PipeTransform } from '@angular/core';
import { IPlayer } from '../../interfaces/player';

@Pipe({
  name: 'sortByScore',
  pure: true,
  standalone: true,
})
export class SortByScorePipe implements PipeTransform {
  transform(players: IPlayer[]): IPlayer[] {
    return players.sort((a, b) => a.score - b.score);
  }
}
