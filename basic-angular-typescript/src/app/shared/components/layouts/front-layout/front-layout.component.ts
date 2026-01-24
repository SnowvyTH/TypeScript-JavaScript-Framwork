import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../navigation/navbar/navbar.component";
import { FooterComponent } from "../../footer/footer/footer.component";

@Component({
  selector: 'app-front-layout',
  imports: [NavbarComponent, FooterComponent, RouterOutlet],
  templateUrl: './front-layout.component.html',
  styleUrl: './front-layout.component.css'
})
export class FrontLayoutComponent {

}
