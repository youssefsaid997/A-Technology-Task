import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent {
  @Input() icon!: string;
  @Input() controller!: FormControl;

  selectedCar: number = 1;

  users = [
    { id: 1, name: 'Ahmed' },
    { id: 2, name: 'Muhab' },
    { id: 3, name: 'Muhammed' },
    { id: 4, name: 'Yasser' },
  ];
}
