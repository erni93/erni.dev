import { Component, Input } from '@angular/core';
import { Section } from '../../../core/models/section.model';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent {
  @Input() data: Section;
}
