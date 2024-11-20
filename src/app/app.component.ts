import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { MissaoComponent } from './missao/missao.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AboutUsComponent, CarouselComponent, ContactFormComponent, FirstPageComponent, MissaoComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'advocacia';
}
