import { Component } from "@angular/core";
import { finalize } from "rxjs/operators";

import { AppService } from "./app.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public isLoading = true;
  constructor(private appService: AppService) {
    this.appService
      .refreshProfileInfo()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe(result => console.log(result));
  }
}
