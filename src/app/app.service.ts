import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { ProfileInfo } from "../core/models/profile-info.model";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AppService {
  public profileInfo: ProfileInfo;

  constructor(private http: HttpClient) {}

  public refreshProfileInfo(): Observable<ProfileInfo> {
    return this.http
      .get("assets/profile-info.json")
      .pipe(tap((result: ProfileInfo) => (this.profileInfo = result)));
  }
}
