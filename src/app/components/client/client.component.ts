import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent {
  @Input() icon!: string;
  @Input() bgColor!: string;
}
