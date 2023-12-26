import { CanActivateFn, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

let router: Router;

export const authGuard: CanActivateFn = (route, state) => {
  const currentUser = localStorage.getItem(environment.userStorageKey);
  if (currentUser) {
      return true;
  }

  if (!router) {
    router = new Router();
  }

  router.navigate(['/login']);
  return false;
};