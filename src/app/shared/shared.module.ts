import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button.component';
import { IconButtonComponent } from './components/icon-button.component';
import { ButtonExampleComponent } from './components/button-example.component';
import { InputComponent } from './components/input.component';
import { TextareaComponent } from './components/textarea.component';
import { SelectComponent } from './components/select.component';
import { CheckboxComponent } from './components/checkbox.component';
import { RadioComponent } from './components/radio.component';
import { SwitchComponent } from './components/switch.component';
import { BadgeComponent } from './components/badge/badge.component';
import { ChipComponent } from './components/chip/chip.component';
import { BadgeExampleComponent } from './components/badge/badge-example.component';
import { ChipExampleComponent } from './components/chip/chip-example.component';

@NgModule({
  declarations: [
    ButtonComponent,
    IconButtonComponent,
    ButtonExampleComponent,
    InputComponent,
    TextareaComponent,
    SelectComponent,
    CheckboxComponent,
    RadioComponent,
    SwitchComponent,
    BadgeComponent,
    ChipComponent,
    BadgeExampleComponent,
    ChipExampleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    IconButtonComponent,
    ButtonExampleComponent,
    InputComponent,
    TextareaComponent,
    SelectComponent,
    CheckboxComponent,
    RadioComponent,
    SwitchComponent,
    BadgeComponent,
    ChipComponent,
    BadgeExampleComponent,
    ChipExampleComponent
  ]
})
export class SharedModule { }