import { Component } from '@angular/core';
import { ApiService } from '../../services/game-state.service';

@Component({
  selector: 'app-home',
  standalone: false,
  template: `
    <h1>Pokemon</h1>
    <input [(ngModel)]="name" placeholder="Ton nom">
    <button (click)="start()">Commencer</button>
  `
})
export class HomeComponent {
  name = '';

  constructor(private api: ApiService) {}

  start() {
    if (!this.name) return;

    this.api.addPlayer(this.name).subscribe({
      next: () => console.log('Joueur ajouté à la DB !'),
      error: (err: any) => console.error('Erreur API:', err)
    });
  }
}
