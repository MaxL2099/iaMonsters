import {Component} from '@angular/core';

@Component({
  selector: 'app-result',
  template: `
    <h1>{{result}}</h1>
  `
})
export class ResultComponent {
  result = 'Victoire';
}
