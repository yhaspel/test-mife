import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppComponent {
  title = 'test-mife';

  // testSignal = signal('TEST SIGNAL');

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  navigateToTestRoute() {
    this.router.navigate(['test'], { relativeTo: this.activatedRoute });
  }
}
