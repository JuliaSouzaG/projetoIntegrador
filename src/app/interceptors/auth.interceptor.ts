import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
   const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  if (token) {
    const clonedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
    return next(clonedReq);
  }

  return next(req);
};
