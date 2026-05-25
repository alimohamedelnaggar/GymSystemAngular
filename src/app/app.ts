import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollTop } from "./features/home/components/scroll-top/scroll-top";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ScrollTop],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('GymSystemAngular');
}
