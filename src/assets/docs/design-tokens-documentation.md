# NOVA STORE Design Tokens Documentation

## Overview
This document describes the design tokens used in the NOVA STORE project. Design tokens are the atomic values that define the visual language of the application, including colors, typography, spacing, and other UI constants.

## Color Tokens

### Primary Colors
- `--color-primary`: #212121 (Black base)
- `--color-primary-dark`: #000000
- `--color-primary-light`: #424242

### Secondary Colors
- `--color-secondary`: #9e9e9e (Graphite)
- `--color-secondary-dark`: #616161
- `--color-secondary-light`: #e0e0e0

### Accent Colors
- `--color-accent`: #8BC34A (Lime green)
- `--color-accent-dark`: #689F38
- `--color-accent-light`: #C5E1A5

### Background Colors
- `--color-background`: #ffffff (White background)
- `--color-surface`: #f5f5f5 (Light gray surface)

### Text Colors
- `--color-text`: #212121 (Dark text)
- `--color-text-secondary`: #757575
- `--color-text-muted`: #9e9e9e

### Border Colors
- `--color-border`: #e0e0e0
- `--color-border-dark`: #bdbdbd

### Status Colors
- `--color-success`: #4CAF50
- `--color-success-dark`: #388E3C
- `--color-success-light`: #C8E6C9

- `--color-warning`: #ff9800
- `--color-warning-dark`: #f57c00
- `--color-warning-light`: #ffe0b2

- `--color-danger`: #f44336
- `--color-danger-dark`: #d32f2f
- `--color-danger-light`: #ffcdd2

## Typography Tokens

### Font Families
- `--font-family-primary`: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
- `--font-family-secondary`: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif

### Font Sizes
- `--font-size-xxxxl`: clamp(2.5rem, 4vw, 4rem) (Hero headings)
- `--font-size-xxxl`: clamp(2rem, 3.5vw, 3rem) (Section headings)
- `--font-size-xxl`: clamp(1.75rem, 3vw, 2.5rem) (Main headings)
- `--font-size-xl`: clamp(1.5rem, 2.5vw, 2rem) (Subheadings)
- `--font-size-lg`: clamp(1.25rem, 2vw, 1.75rem) (Section titles)
- `--font-size-md`: clamp(1rem, 1.5vw, 1.25rem) (Body text)
- `--font-size-sm`: clamp(0.875rem, 1.25vw, 1rem) (Small text)
- `--font-size-xs`: clamp(0.75rem, 1vw, 0.875rem) (Extra small text)

### Font Weights
- `--font-weight-light`: 300
- `--font-weight-normal`: 400
- `--font-weight-medium`: 500
- `--font-weight-semibold`: 600
- `--font-weight-bold`: 700

### Line Heights
- `--line-height-tight`: 1.2
- `--line-height-normal`: 1.5
- `--line-height-loose`: 1.8

## Spacing Tokens

### Base Units
- `--spacing-xxs`: 2px
- `--spacing-xs`: 4px
- `--spacing-sm`: 8px
- `--spacing-md`: 16px
- `--spacing-lg`: 24px
- `--spacing-xl`: 32px
- `--spacing-xxl`: 48px
- `--spacing-xxxl`: 64px

### Common Aliases
- `--spacing-xs`: var(--spacing-2)
- `--spacing-sm`: var(--spacing-4)
- `--spacing-md`: var(--spacing-6)
- `--spacing-lg`: var(--spacing-8)
- `--spacing-xl`: var(--spacing-10)
- `--spacing-xxl`: var(--spacing-12)
- `--spacing-xxxl`: var(--spacing-16)

## Component Tokens

### Border Radius
- `--border-radius-xs`: 2px
- `--border-radius-sm`: 4px
- `--border-radius-md`: 8px
- `--border-radius-lg`: 12px
- `--border-radius-xl`: 16px
- `--border-radius-xxl`: 20px
- `--border-radius-full`: 50%

### Box Shadows
- `--box-shadow-none`: none
- `--box-shadow-1`: 0 1px 3px rgba(0,0,0,0.12)
- `--box-shadow-2`: 0 3px 6px rgba(0,0,0,0.16)
- `--box-shadow-3`: 0 6px 12px rgba(0,0,0,0.18)
- `--box-shadow-4`: 0 10px 20px rgba(0,0,0,0.19)
- `--box-shadow-5`: 0 14px 28px rgba(0,0,0,0.25)
- `--box-shadow-6`: 0 19px 38px rgba(0,0,0,0.30)

### Transitions
- `--transition-duration-fast`: 150ms
- `--transition-duration-normal`: 300ms
- `--transition-duration-slow`: 500ms
- `--transition-duration-extra-slow`: 750ms

## Usage Guidelines

1. Always use design tokens instead of hardcoded values
2. For semantic purposes, use semantic color tokens when available
3. Maintain consistency across components by using the same tokens
4. When creating new components, reference existing tokens rather than defining new ones