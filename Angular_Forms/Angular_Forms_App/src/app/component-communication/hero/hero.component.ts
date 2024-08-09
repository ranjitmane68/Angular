import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IHero } from '../../interfaces/hero';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  @Input({ required: true })
  hero!: IHero;

  @Output()
  selectedHero = new EventEmitter<IHero>();

  clickHero() {
    console.log('click hero is called');
    this.selectedHero.emit(this.hero);
  }
}
