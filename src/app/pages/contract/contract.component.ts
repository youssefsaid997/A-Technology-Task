import { Component } from '@angular/core';
import { Card } from '../../components/float-card/float-card.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  contractForm = new FormGroup({
    price: new FormControl('', [Validators.required]),
    user: new FormControl('', [Validators.required]),
    successRate: new FormControl(0, [Validators.required]),
  });

  onSubmit() {
    console.log(this.contractForm.value);
  }
}
