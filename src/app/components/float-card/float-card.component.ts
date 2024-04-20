import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-float-card',
  templateUrl: './float-card.component.html',
  styleUrl: './float-card.component.css',
})
export class FloatCardComponent {
  @Input() card!: Card;
  @Input() key!: number;
}
export interface Card {
  label: string;
  icon: string;
  title: string;
  img?: string;
}
