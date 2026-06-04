import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  tipo = 'Simples';
  preco = 100.00;

  
getTitle(){
  return 'Plano' + ' ' + this.tipo;

}

}
