import { Component, Input } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import marked from "marked";
import DOMPurify from "dompurify";

@Component({
  selector: "app-markdown",
  template: '<div [innerHTML]="data"></div>',
  styleUrls: ["./markdown.component.scss"]
})
export class MarkdownComponent {
  @Input("text")
  set text(value: string) {
    this.data = this.markdownToSafeHtml(value);
  }

  data: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {}

  markdownToSafeHtml(value: string): SafeHtml {
    const html = marked(value);
    const safeHtml = DOMPurify.sanitize(html);
    return this.sanitizer.bypassSecurityTrustHtml(safeHtml);
  }
}
