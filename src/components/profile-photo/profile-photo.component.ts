import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { ProfileInfo } from 'src/core/models/profile-info.model';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-profile-photo',
  templateUrl: './profile-photo.component.html',
  styleUrls: ['./profile-photo.component.scss']
})
export class ProfilePhotoComponent {
  public profileInfo: ProfileInfo;
  public VERSION = environment.version;
  public IMG_PATH_PREFIX = environment.imgPathPrefix;

  constructor(private appService: AppService) {
    this.profileInfo = appService.profileInfo;
  }

  sendAnalytics(name: string) {
    this.appService.sendEvent('socialMedia', {
      name: name
    });
  }
}
