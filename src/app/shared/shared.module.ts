import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button.component';
import { IconButtonComponent } from './components/icon-button.component';
import { ButtonExampleComponent } from './components/button-example.component';

@NgModule({
  declarations: [
    ButtonComponent,
    IconButtonComponent,
    ButtonExampleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    IconButtonComponent,
    ButtonExampleComponent
  ]
})
export class SharedModule { }