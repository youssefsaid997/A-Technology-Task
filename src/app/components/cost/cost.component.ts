import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cost',
  templateUrl: './cost.component.html',
  styleUrl: './cost.component.css',
})
export class CostComponent {
  @Input() icon!: string;
}
