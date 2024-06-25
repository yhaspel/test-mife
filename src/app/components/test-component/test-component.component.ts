import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-test-component',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.scss',
})
export class TestComponentComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  navigateToInternalRoute1() {
    this.router.navigate(['.', 'one'], { relativeTo: this.activatedRoute });
  }

  navigateToInternalRoute2() {
    this.router.navigate(['.', 'two'], { relativeTo: this.activatedRoute });
  }
}
