import { Component } from '@angular/core';
import { ContactFormComponent } from "../contact-form/contact-form.component";
import { MissaoComponent } from "../missao/missao.component";
import { HomeComponent } from "../home/home.component";
import { AboutUsComponent } from "../about-us/about-us.component";
import { FirstPageComponent } from "../first-page/first-page.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ContactFormComponent, MissaoComponent, HomeComponent, AboutUsComponent, FirstPageComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
