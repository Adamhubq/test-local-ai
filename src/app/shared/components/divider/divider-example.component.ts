import { Component } from '@angular/core';

@Component({
  selector: 'nova-divider-example',
  template: `
    <div class="example">
      <h3>Divider Examples</h3>
      
      <div class="example__row">
        <p>Text before divider</p>
        <nova-divider></nova-divider>
        <p>Text after divider</p>
      </div>
      
      <div class="example__row example__row--vertical">
        <p>Text before vertical divider</p>
        <nova-divider orientation="vertical"></nova-divider>
        <p>Text after vertical divider</p>
      </div>
    </div>
  `,
  styleUrls: ['./divider-example.component.scss']
})
export class DividerExampleComponent {
}