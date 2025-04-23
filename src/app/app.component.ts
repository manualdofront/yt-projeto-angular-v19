import { Component } from '@angular/core';
import { HelloWorldModularModule } from './hello-world-modular/hello-world-modular.module';
import { TextStandaloneComponent } from './text-standalone/text-standalone.component';

@Component({
  selector: 'app-root',
  imports: [HelloWorldModularModule, TextStandaloneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'yt-projeto-v19';
}
