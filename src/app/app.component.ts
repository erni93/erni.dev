import { Component } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { AppService } from './app.service';
import { ProfileInfo } from '../core/models/profile-info.model';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isLoading = true;
  public profileInfo: ProfileInfo;

  constructor(
    private appService: AppService,
    private titleService: Title,
    private metaService: Meta
  ) {
    this.appService
      .refreshProfileInfo()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe(profileInfo => {
        this.profileInfo = profileInfo;
      });
  }
}
