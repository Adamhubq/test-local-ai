import { Component } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent {
  title = 'NOVA STORE UI Kit';
  
  // For interactive examples
  checkboxChecked = false;
  switchChecked = false;
  radioValue = 'option1';
  inputValue = '';
  textareaValue = '';
  selectValue = 'option1';
}