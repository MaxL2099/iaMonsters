import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // nécessaire pour *ngFor

@Component({
  selector: 'app-pokedex',
  standalone: false, // ✅ indispensable pour *ngFor
  template: `
    <h2>Pokédex</h2>
  `
})
export class PokedexComponent {

}
