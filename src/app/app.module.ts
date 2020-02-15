import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ProfilePhotoComponent } from "../components/profile-photo/profile-photo.component";
import { SectionTitleComponent } from "../components/shared/section-title/section-title.component";
import { MarkdownComponent } from "../components/shared/markdown/markdown.component";
import { TextSectionComponent } from "../components/text-section/text-section.component";

@NgModule({
  declarations: [
    AppComponent,
    ProfilePhotoComponent,
    SectionTitleComponent,
    MarkdownComponent,
    TextSectionComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
