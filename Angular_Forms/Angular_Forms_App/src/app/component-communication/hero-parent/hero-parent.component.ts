import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { IHero } from '../../interfaces/hero';

@Component({
  selector: 'app-hero-parent',
  standalone: true,
  templateUrl: './hero-parent.component.html',
  styleUrl: './hero-parent.component.scss',
  imports: [HeroComponent],
})
export class HeroParentComponent {
  hero: IHero = {
    name: 'heroOne',
    skill: 'fly',
    isActive: true,
  };

  onHeroSelected(event: IHero) {
    console.log('Hero selected event is called');
    console.log(event);
  }
}
