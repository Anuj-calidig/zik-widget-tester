import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe-widget',
  standalone: true,
  templateUrl: './iframe-widget.component.html',
  styleUrl: './iframe-widget.component.css'
})
export class IframeWidgetComponent {
  readonly iframeSrc: SafeResourceUrl;

  constructor(private readonly sanitizer: DomSanitizer) {
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://cali-clinic.calidig.com/zik-widget/'
    );
  }
}
