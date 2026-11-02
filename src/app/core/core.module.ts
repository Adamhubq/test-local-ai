import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorHandlerService } from './services/error-handler.service';
import { GlobalErrorHandler } from './services/global-error-handler';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ErrorHandlerService,
    { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ]
})
export class CoreModule { }