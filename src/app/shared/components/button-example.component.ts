import { Component } from '@angular/core';

@Component({
  selector: 'ns-button-example',
  template: `
    <div class="button-example">
      <h3>Button Variants</h3>
      <div class="button-row">
        <ns-button variant="primary">Primary</ns-button>
        <ns-button variant="secondary">Secondary</ns-button>
        <ns-button variant="outline">Outline</ns-button>
        <ns-button variant="ghost">Ghost</ns-button>
        <ns-button variant="danger">Danger</ns-button>
      </div>

      <h3>Button Sizes</h3>
      <div class="button-row">
        <ns-button size="sm">Small</ns-button>
        <ns-button size="md">Medium</ns-button>
        <ns-button size="lg">Large</ns-button>
      </div>

      <h3>Button States</h3>
      <div class="button-row">
        <ns-button [disabled]="true">Disabled</ns-button>
        <ns-button [loading]="true">Loading</ns-button>
        <ns-button fullWidth>Full Width</ns-button>
      </div>

      <h3>Icon Button Examples</h3>
      <div class="button-row">
        <ns-icon-button variant="primary" ariaLabel="Add to cart">
          <span>+</span>
        </ns-icon-button>
        <ns-icon-button variant="secondary" ariaLabel="Remove from cart">
          <span>-</span>
        </ns-icon-button>
        <ns-icon-button variant="outline" ariaLabel="Edit">
          <span>✏️</span>
        </ns-icon-button>
        <ns-icon-button variant="ghost" ariaLabel="Share">
          <span>🔗</span>
        </ns-icon-button>
        <ns-icon-button variant="danger" ariaLabel="Delete">
          <span>🗑️</span>
        </ns-icon-button>
      </div>

      <h3>Icon Button Sizes</h3>
      <div class="button-row">
        <ns-icon-button size="sm" ariaLabel="Small icon">
          <span>🔍</span>
        </ns-icon-button>
        <ns-icon-button size="md" ariaLabel="Medium icon">
          <span>🔍</span>
        </ns-icon-button>
        <ns-icon-button size="lg" ariaLabel="Large icon">
          <span>🔍</span>
        </ns-icon-button>
      </div>

      <h3>Icon Button States</h3>
      <div class="button-row">
        <ns-icon-button [disabled]="true" ariaLabel="Disabled icon">
          <span>🔒</span>
        </ns-icon-button>
        <ns-icon-button [loading]="true" ariaLabel="Loading icon">
          <span>🔄</span>
        </ns-icon-button>
      </div>
    </div>
  `,
  styles: [`
    .button-example {
      padding: 20px;
      background-color: var(--color-light);
      border-radius: var(--border-radius-md);
    }

    .button-row {
      display: flex;
      gap: 16px;
      margin-bottom: 24px;
      flex-wrap: wrap;
    }

    h3 {
      margin-top: 0;
      color: var(--color-text);
    }
  `]
})
export class ButtonExampleComponent { }