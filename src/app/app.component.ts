import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IframeWidgetComponent } from './iframe-widget/iframe-widget.component';

type WidgetMode = 'web-component' | 'iframe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, IframeWidgetComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'zik-widget-tester';
  mode: WidgetMode = 'web-component';

  setMode(mode: WidgetMode): void {
    this.mode = mode;
  }
}
