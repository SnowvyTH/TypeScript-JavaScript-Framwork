import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css',
  standalone: true
})
export class NotFoundComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back()
  }
}
