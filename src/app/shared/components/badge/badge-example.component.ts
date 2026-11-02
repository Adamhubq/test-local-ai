import { Component } from '@angular/core';

@Component({
  selector: 'nova-badge-example',
  template: `
    <div class="badge-example">
      <h3>Badge Examples</h3>
      <div class="badge-example__row">
        <nova-badge type="neutral" label="Neutral"></nova-badge>
        <nova-badge type="accent" label="Accent"></nova-badge>
        <nova-badge type="success" label="Success"></nova-badge>
        <nova-badge type="warning" label="Warning"></nova-badge>
        <nova-badge type="danger" label="Danger"></nova-badge>
      </div>
    </div>
  `
})
export class BadgeExampleComponent { }