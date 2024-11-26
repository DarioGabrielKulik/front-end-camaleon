import { CanActivateFn, RouterStateSnapshot } from '@angular/router';

export const authGuard: CanActivateFn = (route, state: RouterStateSnapshot) => {
  
  const token = localStorage.getItem('token');
  if (token) {
    const data = JSON.parse(token);
    if (data.permisos && data.rol === 'USER') {     
      return true;
    }
  }
  return false;
};
