import { Component } from '@angular/core';

@Component({
  selector: 'app-test-tokens',
  template: `
    <div class="test-container">
      <h2>Design Tokens Test</h2>
      <div class="color-test" style="background-color: var(--color-background); color: var(--color-text);">
        Background and text colors
      </div>
      <div class="accent-test" style="background-color: var(--color-accent); color: var(--color-background);">
        Accent color test
      </div>
      <div class="spacing-test" style="padding: var(--spacing-md); margin: var(--spacing-sm);">
        Spacing test
      </div>
      <div class="typography-test" style="font-size: var(--font-size-lg); font-weight: var(--font-weight-bold);">
        Typography test
      </div>
    </div>
  `,
  styles: [`
    .test-container {
      padding: var(--spacing-md);
    }
    
    .color-test {
      padding: var(--spacing-md);
      margin: var(--spacing-sm) 0;
      border: 1px solid var(--color-border);
    }
    
    .accent-test {
      padding: var(--spacing-md);
      margin: var(--spacing-sm) 0;
    }
    
    .spacing-test {
      background-color: var(--color-surface);
      margin: var(--spacing-sm) 0;
    }
    
    .typography-test {
      margin: var(--spacing-sm) 0;
    }
  `]
})
export class TestTokensComponent {
}