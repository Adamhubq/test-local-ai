import { Component } from '@angular/core';

@Component({
  selector: 'nova-avatar-example',
  template: `
    <div class="example">
      <h3>Avatar Examples</h3>
      
      <div class="example__row">
        <nova-avatar src="https://via.placeholder.com/150" alt="User avatar"></nova-avatar>
        <nova-avatar alt="Fallback avatar"></nova-avatar>
        <nova-avatar size="sm" alt="Small avatar"></nova-avatar>
        <nova-avatar size="lg" alt="Large avatar"></nova-avatar>
      </div>
    </div>
  `,
  styleUrls: ['./avatar-example.component.scss']
})
export class AvatarExampleComponent {
}