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
  public version = environment.version;

  constructor(appService: AppService) {
    this.profileInfo = appService.profileInfo;
  }
}
