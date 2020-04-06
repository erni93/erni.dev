import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-section',
  templateUrl: './text-section.component.html',
  styleUrls: ['./text-section.component.scss']
})
export class TextSectionComponent {
  @Input() header: string;
  @Input() text: string;

  constructor() {}
}
