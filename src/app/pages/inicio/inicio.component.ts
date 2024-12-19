import { Component } from '@angular/core';
import { MissaoComponent } from "../missao/missao.component";
import { ServicesComponent } from "../services/services.component";
import { AboutUsComponent } from "../about-us/about-us.component";
import { FirstPageComponent } from "../first-page/first-page.component";
import { AssociadosComponent } from "../associados/associados.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MissaoComponent, ServicesComponent, AboutUsComponent, FirstPageComponent, AssociadosComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
