import { Component } from '@angular/core';

@Component({
  selector: 'nova-chip-example',
  template: `
    <div class="chip-example">
      <h3>Chip Examples</h3>
      <div class="chip-example__row">
        <nova-chip type="neutral" label="Neutral"></nova-chip>
        <nova-chip type="accent" label="Accent"></nova-chip>
        <nova-chip type="success" label="Success"></nova-chip>
        <nova-chip type="warning" label="Warning"></nova-chip>
        <nova-chip type="danger" label="Danger"></nova-chip>
        <nova-chip type="accent" label="Dismissible" dismissible="true"></nova-chip>
      </div>
    </div>
  `
})
export class ChipExampleComponent { }