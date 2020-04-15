import { Component, Input } from '@angular/core';
import { ProjectsSection } from '../../core/models/section.model';
import { environment } from '../../environments/environment';
import { AppService } from '../../app/app.service';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent {
  @Input() data: ProjectsSection;

  public IMG_PATH_PREFIX = environment.imgPathPrefix;

  constructor(private appService: AppService) {}

  sendAnalytics(name: string) {
    this.appService.sendEvent('project', {
      name: name
    });
  }
}
