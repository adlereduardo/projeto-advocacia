import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient, withFetch } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { AuthService } from './autenticacao/auth.service';
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // Primeiro Projeto completo em Angular 19 - Turma SENAI
  title = 'Projeto Angular Advocacia';

  http = inject(HttpClient);
  isLoggedIn: boolean = false;


  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Subscreve ao estado de login para atualizar a interface
    this.authService.isLoggedIn$.subscribe((isLoggedIn: boolean) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  logout() {
    this.authService.logout().subscribe(() => {
      console.log('Usuário desconectado com sucesso');
    });
}
}
