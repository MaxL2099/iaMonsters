import {Component} from '@angular/core';

@Component({
  selector: 'app-battle',
  template: `
    <h2>Combat</h2>
    <p>HP Joueur: {{playerHp}}</p>
    <p>HP Ennemi: {{enemyHp}}</p>

    <button (click)="attack()">Attaquer</button>
  `
})
export class BattleComponent {
  playerHp = 100;
  enemyHp = 100;

  attack() {
    this.enemyHp -= 10;
    this.playerHp -= 5;

    if (this.enemyHp <= 0) alert('Victoire');
    if (this.playerHp <= 0) alert('Défaite');
  }
}
