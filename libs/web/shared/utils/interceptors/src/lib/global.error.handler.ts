import { ErrorHandler, Inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GlobalErrorHandler implements ErrorHandler {
  constructor() {}

  handleError(error: Error) {
    // custom error handling logic
    // display error to user
    this.displayError(error);
    //todo: send error to log server
  }

  private displayError(error: Error): void {
    // call error logging API or display error
  }
}
