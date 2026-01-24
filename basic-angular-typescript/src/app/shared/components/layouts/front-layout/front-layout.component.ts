import { Component } from '@angular/core';
import { NavbarComponent } from "../../navigation/navbar/navbar.component";
import { FooterComponent } from "../../footer/footer/footer.component";
import { RouterOutlet } from "../../../../../../node_modules/@angular/router/router_module.d-Bx9ArA6K";

@Component({
  selector: 'app-front-layout',
  imports: [NavbarComponent, FooterComponent, RouterOutlet],
  templateUrl: './front-layout.component.html',
  styleUrl: './front-layout.component.css'
})
export class FrontLayoutComponent {

}
