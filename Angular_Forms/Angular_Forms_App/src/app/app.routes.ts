import { Routes } from '@angular/router';
import { PlayersComponent } from './pages/players/players/players.component';
import { HighScoresComponent } from './components/high-scores/high-scores.component';
import { HomeComponent } from './observables/home/home.component';
import { HeroComponent } from './component-communication/hero/hero.component';
import { HeroParentComponent } from './component-communication/hero-parent/hero-parent.component';
import { TestUserTemplateFormComponent } from './forms/test-user-template-form/test-user-template-form.component';
import { TestReactiveUserFormsComponent } from './forms/test-reactive-user-forms/test-reactive-user-forms.component';
import { ShoppingListFormComponent } from './forms/shopping-list-form/shopping-list-form.component';

export const routes: Routes = [
  {
    path: '',
    component: PlayersComponent,
  },
  {
    path: 'high-scores',
    component: HighScoresComponent,
  },
  {
    path: 'observables',
    component: HomeComponent,
  },
  {
    path: 'hero',
    component: HeroComponent,
  },
  {
    path: 'hero-parent',
    component: HeroParentComponent,
  },
  {
    path: 'user-template-form',
    component: TestUserTemplateFormComponent,
  },
  {
    path: 'user-reactive-form',
    component: TestReactiveUserFormsComponent,
  },
  {
    path: 'shopping-list',
    component: ShoppingListFormComponent,
  },
];
