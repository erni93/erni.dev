import { Component, Input } from '@angular/core';
import { TextSection } from '../../core/models/section.model';

@Component({
  selector: 'app-text-section',
  templateUrl: './text-section.component.html',
  styleUrls: ['./text-section.component.scss']
})
export class TextSectionComponent {
  @Input() data: TextSection;
}
