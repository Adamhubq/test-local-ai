import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button.component';
import { IconButtonComponent } from './components/icon-button.component';
import { ButtonExampleComponent } from './components/button-example.component';
import { InputComponent } from './components/input.component';
import { TextareaComponent } from './components/textarea.component';

@NgModule({
  declarations: [
    ButtonComponent,
    IconButtonComponent,
    ButtonExampleComponent,
    InputComponent,
    TextareaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    IconButtonComponent,
    ButtonExampleComponent,
    InputComponent,
    TextareaComponent
  ]
})
export class SharedModule { }