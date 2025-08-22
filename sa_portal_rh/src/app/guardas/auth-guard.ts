import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const usuario = authService.getUsuarioLogado();
  const tipo = usuario?.tipo;
  const requiredTipo = route.data['autorizado'];

  if (!tipo) {
    router.navigate(['/login']);
    return false;
  }

  return tipo === requiredTipo;
};
