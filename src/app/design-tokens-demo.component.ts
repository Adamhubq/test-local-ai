import { Component } from '@angular/core';

@Component({
  selector: 'app-design-tokens-demo',
  template: `
    <div class="tokens-demo-container">
      <h1>NOVA STORE Design Tokens</h1>
      
      <!-- Color Tokens -->
      <section class="tokens-section">
        <h2>Color Tokens</h2>
        <div class="color-grid">
          <div class="color-item" *ngFor="let color of colorTokens" [style.background-color]="color.value">
            <span class="color-name">{{ color.name }}</span>
            <span class="color-value">{{ color.value }}</span>
          </div>
        </div>
      </section>

      <!-- Typography Scale -->
      <section class="tokens-section">
        <h2>Typography Scale</h2>
        <div class="typography-grid">
          <div class="typography-item" *ngFor="let font of typographyTokens">
            <div class="font-preview" [style.font-size]="font.size" 
                 [style.font-weight]="font.weight" 
                 [style.line-height]="font.lineHeight">
              {{ font.name }}
            </div>
            <div class="font-info">
              <span class="font-name">{{ font.name }}</span>
              <span class="font-details">Size: {{ font.size }}, Weight: {{ font.weight }}, Line height: {{ font.lineHeight }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Spacing Tokens -->
      <section class="tokens-section">
        <h2>Spacing Tokens</h2>
        <div class="spacing-grid">
          <div class="spacing-item" *ngFor="let spacing of spacingTokens">
            <div class="spacing-preview" [style.padding]="spacing.value"></div>
            <span class="spacing-name">{{ spacing.name }}</span>
            <span class="spacing-value">{{ spacing.value }}</span>
          </div>
        </div>
      </section>

      <!-- Border Radius Tokens -->
      <section class="tokens-section">
        <h2>Border Radius Tokens</h2>
        <div class="radius-grid">
          <div class="radius-item" *ngFor="let radius of borderRadiusTokens">
            <div class="radius-preview" [style.border-radius]="radius.value"></div>
            <span class="radius-name">{{ radius.name }}</span>
            <span class="radius-value">{{ radius.value }}</span>
          </div>
        </div>
      </section>

      <!-- Box Shadow Tokens -->
      <section class="tokens-section">
        <h2>Box Shadow Tokens</h2>
        <div class="shadow-grid">
          <div class="shadow-item" *ngFor="let shadow of boxShadowTokens">
            <div class="shadow-preview" [style.box-shadow]="shadow.value"></div>
            <span class="shadow-name">{{ shadow.name }}</span>
            <span class="shadow-value">{{ shadow.value }}</span>
          </div>
        </div>
      </section>

      <!-- Border Tokens -->
      <section class="tokens-section">
        <h2>Border Tokens</h2>
        <div class="border-grid">
          <div class="border-item" *ngFor="let border of borderTokens">
            <div class="border-preview" [style.border]="border.value"></div>
            <span class="border-name">{{ border.name }}</span>
            <span class="border-value">{{ border.value }}</span>
          </div>
        </div>
      </section>

      <!-- Interactive States -->
      <section class="tokens-section">
        <h2>Interactive States</h2>
        <div class="interactive-grid">
          <div class="interactive-item" *ngFor="let state of interactiveStates">
            <div class="interactive-preview" [style.outline]="state.value"></div>
            <span class="interactive-name">{{ state.name }}</span>
            <span class="interactive-value">{{ state.value }}</span>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .tokens-demo-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: var(--spacing-md);
      font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    h1 {
      font-size: var(--font-size-xxl);
      font-weight: var(--font-weight-bold);
      margin-bottom: var(--spacing-lg);
      color: var(--color-text);
    }

    h2 {
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-semibold);
      margin-bottom: var(--spacing-md);
      color: var(--color-text);
    }

    .tokens-section {
      margin-bottom: var(--spacing-xl);
    }

    /* Color Grid */
    .color-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: var(--spacing-md);
    }

    .color-item {
      padding: var(--spacing-md);
      border-radius: var(--border-radius-sm);
      color: white;
      text-align: center;
      box-shadow: var(--box-shadow-1);
    }

    .color-name {
      display: block;
      font-weight: var(--font-weight-bold);
      margin-bottom: var(--spacing-xs);
    }

    .color-value {
      display: block;
      font-size: var(--font-size-sm);
      opacity: 0.9;
    }

    /* Typography Grid */
    .typography-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: var(--spacing-md);
    }

    .typography-item {
      padding: var(--spacing-md);
      border-radius: var(--border-radius-sm);
      background-color: var(--color-surface);
    }

    .font-preview {
      margin-bottom: var(--spacing-md);
      padding: var(--spacing-sm);
      border: 1px solid var(--color-border);
      border-radius: var(--border-radius-sm);
    }

    .font-name {
      display: block;
      font-weight: var(--font-weight-bold);
      margin-bottom: var(--spacing-xs);
    }

    .font-details {
      display: block;
      font-size: var(--font-size-sm);
      color: var(--color-text-muted);
    }

    /* Spacing Grid */
    .spacing-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: var(--spacing-md);
    }

    .spacing-item {
      text-align: center;
    }

    .spacing-preview {
      width: 100%;
      height: 60px;
      background-color: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--border-radius-sm);
      margin-bottom: var(--spacing-xs);
    }

    .spacing-name {
      display: block;
      font-weight: var(--font-weight-medium);
      margin-bottom: var(--spacing-xs);
    }

    .spacing-value {
      display: block;
      font-size: var(--font-size-sm);
      color: var(--color-text-muted);
    }

    /* Border Radius Grid */
    .radius-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: var(--spacing-md);
    }

    .radius-item {
      text-align: center;
    }

    .radius-preview {
      width: 80px;
      height: 80px;
      background-color: var(--color-surface);
      margin: 0 auto var(--spacing-xs);
      border: 1px solid var(--color-border);
    }

    .radius-name {
      display: block;
      font-weight: var(--font-weight-medium);
      margin-bottom: var(--spacing-xs);
    }

    .radius-value {
      display: block;
      font-size: var(--font-size-sm);
      color: var(--color-text-muted);
    }

    /* Box Shadow Grid */
    .shadow-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: var(--spacing-md);
    }

    .shadow-item {
      text-align: center;
    }

    .shadow-preview {
      width: 100%;
      height: 60px;
      background-color: var(--color-background);
      border: 1px solid var(--color-border);
      margin-bottom: var(--spacing-xs);
      border-radius: var(--border-radius-sm);
    }

    .shadow-name {
      display: block;
      font-weight: var(--font-weight-medium);
      margin-bottom: var(--spacing-xs);
    }

    .shadow-value {
      display: block;
      font-size: var(--font-size-sm);
      color: var(--color-text-muted);
    }

    /* Border Grid */
    .border-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: var(--spacing-md);
    }

    .border-item {
      text-align: center;
    }

    .border-preview {
      width: 80px;
      height: 40px;
      background-color: var(--color-background);
      margin: 0 auto var(--spacing-xs);
      border: 1px solid var(--color-border);
    }

    .border-name {
      display: block;
      font-weight: var(--font-weight-medium);
      margin-bottom: var(--spacing-xs);
    }

    .border-value {
      display: block;
      font-size: var(--font-size-sm);
      color: var(--color-text-muted);
    }

    /* Interactive States Grid */
    .interactive-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: var(--spacing-md);
    }

    .interactive-item {
      text-align: center;
    }

    .interactive-preview {
      width: 80px;
      height: 40px;
      background-color: var(--color-background);
      margin: 0 auto var(--spacing-xs);
      border: 1px solid var(--color-border);
    }

    .interactive-name {
      display: block;
      font-weight: var(--font-weight-medium);
      margin-bottom: var(--spacing-xs);
    }

    .interactive-value {
      display: block;
      font-size: var(--font-size-sm);
      color: var(--color-text-muted);
    }

    @media (max-width: 768px) {
      .tokens-demo-container {
        padding: var(--spacing-sm);
      }
      
      h1 {
        font-size: var(--font-size-xl);
      }
      
      h2 {
        font-size: var(--font-size-lg);
      }
      
      .color-grid,
      .typography-grid,
      .spacing-grid,
      .radius-grid,
      .shadow-grid,
      .border-grid,
      .interactive-grid {
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      }
    }

    @media (max-width: 480px) {
      .color-grid,
      .typography-grid,
      .spacing-grid,
      .radius-grid,
      .shadow-grid,
      .border-grid,
      .interactive-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class DesignTokensDemoComponent {
  colorTokens = [
    { name: 'Primary Dark', value: '#212121' },
    { name: 'Primary Light', value: '#424242' },
    { name: 'Secondary', value: '#9e9e9e' },
    { name: 'Accent', value: '#8BC34A' },
    { name: 'Success', value: '#4CAF50' },
    { name: 'Warning', value: '#ff9800' },
    { name: 'Error', value: '#f44336' },
    { name: 'Background', value: '#ffffff' },
    { name: 'Surface', value: '#f5f5f5' },
  ];

  typographyTokens = [
    { name: 'Display', size: 'var(--font-size-xxxxl)', weight: 'var(--font-weight-bold)', lineHeight: 'var(--line-height-tight)' },
    { name: 'Heading', size: 'var(--font-size-xxxl)', weight: 'var(--font-weight-semibold)', lineHeight: 'var(--line-height-tight)' },
    { name: 'Title', size: 'var(--font-size-xxl)', weight: 'var(--font-weight-bold)', lineHeight: 'var(--line-height-tight)' },
    { name: 'Body', size: 'var(--font-size-md)', weight: 'var(--font-weight-normal)', lineHeight: 'var(--line-height-normal)' },
    { name: 'Caption', size: 'var(--font-size-sm)', weight: 'var(--font-weight-normal)', lineHeight: 'var(--line-height-tight)' },
    { name: 'Label', size: 'var(--font-size-sm)', weight: 'var(--font-weight-medium)', lineHeight: 'var(--line-height-tight)' },
  ];

  spacingTokens = [
    { name: 'XXS', value: 'var(--spacing-xxs)' },
    { name: 'XS', value: 'var(--spacing-xs)' },
    { name: 'SM', value: 'var(--spacing-sm)' },
    { name: 'MD', value: 'var(--spacing-md)' },
    { name: 'LG', value: 'var(--spacing-lg)' },
    { name: 'XL', value: 'var(--spacing-xl)' },
    { name: 'XXL', value: 'var(--spacing-xxl)' },
    { name: 'XXXL', value: 'var(--spacing-xxxl)' },
  ];

  borderRadiusTokens = [
    { name: 'XS', value: 'var(--border-radius-xs)' },
    { name: 'SM', value: 'var(--border-radius-sm)' },
    { name: 'MD', value: 'var(--border-radius-md)' },
    { name: 'LG', value: 'var(--border-radius-lg)' },
    { name: 'XL', value: 'var(--border-radius-xl)' },
    { name: 'XXL', value: 'var(--border-radius-xxl)' },
    { name: 'Full', value: 'var(--border-radius-full)' },
  ];

  boxShadowTokens = [
    { name: 'Shadow 1', value: 'var(--box-shadow-1)' },
    { name: 'Shadow 2', value: 'var(--box-shadow-2)' },
    { name: 'Shadow 3', value: 'var(--box-shadow-3)' },
    { name: 'Shadow 4', value: 'var(--box-shadow-4)' },
    { name: 'Shadow 5', value: 'var(--box-shadow-5)' },
    { name: 'Shadow 6', value: 'var(--box-shadow-6)' },
  ];

  borderTokens = [
    { name: 'Border Width XS', value: 'var(--border-width-xs) var(--border-style) var(--border-color-primary)' },
    { name: 'Border Width SM', value: 'var(--border-width-sm) var(--border-style) var(--border-color-primary)' },
    { name: 'Border Width MD', value: 'var(--border-width-md) var(--border-style) var(--border-color-primary)' },
    { name: 'Border Width LG', value: 'var(--border-width-lg) var(--border-style) var(--border-color-primary)' },
  ];

  interactiveStates = [
    { name: 'Focus Outline', value: 'var(--outline-focus)' },
    { name: 'Focus Offset', value: 'var(--outline-focus-offset)' },
    { name: 'Transition Fast', value: 'var(--transition-fast)' },
    { name: 'Transition Normal', value: 'var(--transition-normal)' },
  ];
}