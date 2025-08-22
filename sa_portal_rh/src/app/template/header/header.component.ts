import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';

interface NavItem {
  label: string;
  route: string;
  visible: (usuario: Usuario | null) => boolean;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  usuario$: Observable<Usuario | null>;
  navItems: NavItem[] = [
    { label: 'Currículos', route: '/curriculos', visible: () => true },
    { label: 'Vagas', route: '/vagas', visible: () => true },
    { label: 'Admin', route: '/admin', visible: u => !!u && u.tipo === 'admin' }
  ];
item: any;

  constructor(private auth: AuthService) {
    this.usuario$ = this.auth.usuario$;
  }

  logout() {
    this.auth.logout();
  }
}
