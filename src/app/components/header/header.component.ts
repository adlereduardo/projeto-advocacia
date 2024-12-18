import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../autenticacao/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    // Substitua a assinatura para verificar o estado de login
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn; // Atualiza a variável isLoggedIn com o valor emitido pelo BehaviorSubject
    });
  }

  // Defina o método logout, chamando o serviço de autenticação
  logout(): void {
    this.authService.logout().subscribe(() => {
      console.log('Usuário desconectado');
    });
  }
}
