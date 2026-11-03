import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    </div>
  `,
  styles: [`
    .tokens-demo-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 16px;
    }

    h1 {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 24px;
    }

    h2 {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 16px;
    }

    .tokens-section {
      margin-bottom: 32px;
    }

    /* Simplified Grid Layout */
    .color-grid,
    .typography-grid,
    .spacing-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      gap: 16px;
    }

    /* Common Item Styles */
    .color-item,
    .typography-item,
    .spacing-item {
      padding: 12px;
      border-radius: 4px;
      text-align: center;
    }

    .color-item {
      color: white;
    }

    .typography-item {
      background-color: #f5f5f5;
    }

    /* Preview Elements */
    .font-preview {
      margin-bottom: 12px;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    .spacing-preview {
      width: 100%;
      height: 30px;
      background-color: #f5f5f5;
      border: 1px solid #ddd;
      margin-bottom: 8px;
      border-radius: 4px;
    }

    /* Text Elements */
    .color-name,
    .font-name,
    .spacing-name {
      display: block;
      font-weight: bold;
      margin-bottom: 4px;
    }

    .color-value,
    .font-details,
    .spacing-value {
      display: block;
      font-size: 12px;
      color: #666;
    }

    @media (max-width: 768px) {
      .tokens-demo-container {
        padding: 8px;
      }
      
      h1 {
        font-size: 20px;
      }
      
      h2 {
        font-size: 18px;
      }
    }
  `],
  imports: [CommonModule]
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
  ];

  typographyTokens = [
    { name: 'Display', size: '32px', weight: 'bold', lineHeight: '1.2' },
    { name: 'Heading', size: '24px', weight: '600', lineHeight: '1.2' },
    { name: 'Body', size: '16px', weight: 'normal', lineHeight: '1.5' },
  ];

  spacingTokens = [
    { name: 'XS', value: '8px' },
    { name: 'SM', value: '12px' },
    { name: 'MD', value: '16px' },
    { name: 'LG', value: '24px' },
  ];

  // Removed other token types to reduce size
}