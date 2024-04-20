import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cost',
  templateUrl: './cost.component.html',
  styleUrl: './cost.component.css',
})
export class CostComponent {
  @Input() icon!: string;
  @Input() controller!: FormControl;
}
