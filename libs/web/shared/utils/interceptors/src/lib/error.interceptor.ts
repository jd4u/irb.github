import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

let errorCount = 0;
export const errorInterceptor = (
  request: HttpRequest<any>,
  next: HttpHandlerFn,
): Observable<HttpEvent<any>> => {
  errorCount++;

  console.debug('ErrorInterceptor');

  return next(request).pipe(
    //retry(1),
    map((res) => {
      console.debug('res:', res, 'req:', request);
      return res;
    }),
    catchError((error) => {
      console.debug('ErrorIntercept:', errorCount, error);

      if (request.url.indexOf('log') < 0) {
        //todo: send error to server
      }

      if (error instanceof HttpErrorResponse) {
        switch (error.status) {
          case 401:
            //todo: provide appropriate error handling for 401
            // auto logout if 401 response returned from api
            location.reload();
            break;
          case 404:
            //todo: provide appropriate error handling for 404
            throwError(() => error);
            break;
          case 502:
            //todo: provide appropriate error handling for 502
            throwError(() => error);
            break;
          default:
            //todo: provide appropriate error handling for all other errrors
            throwError(() => error);
            break;
        }
      } else {
        return throwError(() => error.error.message || error.statusText);
      }
      return throwError(() => error);
    }),
  );
};
