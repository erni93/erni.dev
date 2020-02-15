import { Component } from "@angular/core";
import { finalize } from "rxjs/operators";

import { AppService } from "./app.service";
import { ProfileInfo } from "../core/models/profile-info.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public isLoading = true;
  public profileInfo: ProfileInfo;

  constructor(private appService: AppService) {
    this.appService
      .refreshProfileInfo()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe(profileInfo => {
        this.profileInfo = profileInfo;
        console.log(profileInfo);
      });
  }
}
