import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() inputStyle!: string;
  @Input() bgColor!: string;
  allStyle!: string;

  ngOnInit() {
    this.allStyle = this.inputStyle + this.bgColor;
  }
}
