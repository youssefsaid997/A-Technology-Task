import { Component } from '@angular/core';
import { Card } from '../../components/float-card/float-card.component';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrl: './contract.component.css',
})
export class ContractComponent {
  floatCards: Card[] = [
    {
      label: 'Mohammed',
      icon: 'pi pi-user',
      title: 'Stackholder',
      img: '../../../assets/image.jpg',
    },
    { label: 'Mohammed', icon: 'pi pi-user', title: 'Stackholder' },

    { label: 'Mohammed', icon: 'pi pi-user', title: 'Stackholder' },
  ];
}
