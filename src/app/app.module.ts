import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ProfilePhotoComponent } from "../components/profile-photo/profile-photo.component";
import { SectionTitleComponent } from "../components/shared/section-title/section-title.component";

@NgModule({
  declarations: [AppComponent, ProfilePhotoComponent, SectionTitleComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
