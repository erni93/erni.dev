import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  FontAwesomeModule,
  FaIconLibrary
} from '@fortawesome/angular-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './app.component';
import { ProfilePhotoComponent } from '../components/profile-photo/profile-photo.component';
import { SectionTitleComponent } from '../components/shared/section-title/section-title.component';
import { MarkdownComponent } from '../components/shared/markdown/markdown.component';
import { TextSectionComponent } from '../components/text-section/text-section.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule, FontAwesomeModule],
  declarations: [
    AppComponent,
    ProfilePhotoComponent,
    SectionTitleComponent,
    MarkdownComponent,
    TextSectionComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faUserCircle);
  }
}
