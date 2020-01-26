import { Component, OnInit } from "@angular/core";
import { AppService } from "src/app/app.service";
import { ProfileInfo } from "src/core/models/profile-info.model";

@Component({
  selector: "app-profile-photo",
  templateUrl: "./profile-photo.component.html",
  styleUrls: ["./profile-photo.component.scss"]
})
export class ProfilePhotoComponent implements OnInit {
  public profileInfo: ProfileInfo;
  constructor(appService: AppService) {
    this.profileInfo = appService.profileInfo;
  }

  ngOnInit() {}
}
