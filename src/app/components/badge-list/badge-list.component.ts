import { Component } from '@angular/core';

@Component({
  selector: 'app-badge-list',
  templateUrl: './badge-list.component.html',

  styleUrl: './badge-list.component.css',
})
export class BadgeListComponent {
  badgeList = [
    { label: 'new page', style: 'bg-blue-50 text-blue-500' },
    { label: 'new page', style: 'bg-red-50 text-red-500' },
    { label: 'new page', style: 'bg-yellow-50 text-yellow-500' },
    { label: 'new page', style: 'bg-green-50 text-green-500' },
    { label: 'new page', style: 'bg-gray-50 text-gray-500' },
    { label: 'new page', style: 'bg-gray-50 text-gray-500' },
  ];
}
