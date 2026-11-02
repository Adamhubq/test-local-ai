# Home Feature Module

This module contains the standalone home page component with all the required elements:
- Header with navigation and actions
- Hero banner section
- Categories section
- Popular products section (using existing product-card component)
- Footer with contact information

## Components

### HomeComponent
The main home page component that includes:
- Header with logo, navigation, and action buttons
- Hero banner with call-to-action
- Category cards grid
- Popular products grid using the existing product-card component
- Comprehensive footer

## Structure

```
features/
└── home/
    ├── home.component.html     # Main template
    ├── home.component.scss     # Styles
    ├── home.component.ts       # Component logic
    ├── home.module.ts          # Module declaration
    └── README.md               # This file
```

## Usage

This component can be used as a standalone page in the application routing.