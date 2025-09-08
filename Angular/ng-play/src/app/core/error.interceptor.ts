// src/app/core/error.interceptor.ts
import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((err: unknown) => {
      // 공통 에러 로깅/가공
      if (err instanceof HttpErrorResponse) {
        console.error('[HTTP ERROR]', req.method, req.url, err.status, err.error);
        // 필요하면 사용자 친화 메시지로 변환
      }
      return throwError(() => err);
    })
  );
};
