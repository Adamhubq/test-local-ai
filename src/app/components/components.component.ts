import { Component } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent {
  title = 'NOVA STORE UI Kit';
  
  // For interactive examples
  checkboxChecked = false;
  switchChecked = false;
  radioValue = 'option1';
  inputValue = '';
  textareaValue = '';
  selectValue = 'option1';

  // Search functionality
  searchQuery = '';
  filteredSections: any[] = [];

  // Mock data for components sections
  componentSections = [
    {
      id: 'product-card',
      title: 'Product Card',
      description: 'Component for displaying product information with image, price and actions'
    },
    {
      id: 'product-grid',
      title: 'Product Grid',
      description: 'Grid layout for displaying multiple products'
    },
    {
      id: 'search-bar',
      title: 'Search Bar',
      description: 'Search input component with clear functionality'
    },
    {
      id: 'search-suggestions',
      title: 'Search Suggestions',
      description: 'Component for showing search suggestions'
    },
    {
      id: 'modal',
      title: 'Modal',
      description: 'Modal dialog component'
    },
    {
      id: 'drawer',
      title: 'Drawer',
      description: 'Slide-in drawer component'
    },
    {
      id: 'dropdown',
      title: 'Dropdown',
      description: 'Dropdown menu component'
    },
    {
      id: 'tabs',
      title: 'Tabs',
      description: 'Tab navigation component'
    },
    {
      id: 'accordion',
      title: 'Accordion',
      description: 'Expandable/collapsible content sections'
    },
    {
      id: 'toast',
      title: 'Toast',
      description: 'Notification message component'
    },
    {
      id: 'skeleton',
      title: 'Skeleton',
      description: 'Loading skeleton placeholder component'
    },
    {
      id: 'loader',
      title: 'Loader',
      description: 'Loading indicator component'
    },
    {
      id: 'empty-state',
      title: 'Empty State',
      description: 'Component for displaying empty states'
    },
    {
      id: 'error-state',
      title: 'Error State',
      description: 'Component for displaying error states'
    },
    {
      id: 'confirmation-dialog',
      title: 'Confirmation Dialog',
      description: 'Dialog component for confirming actions'
    }
  ];

  // Mock data for examples
  demoProducts = [
    {
      id: 1,
      name: 'Sample Product',
      price: 29.99,
      category: 'Category',
      image: '/assets/images/sample.jpg',
      inStock: true,
      rating: 4.5
    }
  ];

  demoSearchSuggestions = ['Product 1', 'Product 2', 'Product 3'];

  // Modal and other interactive examples state
  isModalOpen = false;
  isDrawerOpen = false;
  isDropdownOpen = false;
  activeTab = 'tab1';
  showToast = false;
  toastMessage = '';
  isConfirmationDialogOpen = false;

  accordionItems = [
    { title: 'Item 1', content: 'Content for item 1' },
    { title: 'Item 2', content: 'Content for item 2' }
  ];

  ngOnInit() {
    this.filteredSections = this.componentSections;
  }

  onSearch(query: string): void {
    this.searchQuery = query;
    if (!query.trim()) {
      this.filteredSections = this.componentSections;
      return;
    }

    const searchTerm = query.toLowerCase();
    this.filteredSections = this.componentSections.filter(section => 
      section.title.toLowerCase().includes(searchTerm) || 
      section.description.toLowerCase().includes(searchTerm)
    );
  }

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  openDrawer(): void {
    this.isDrawerOpen = true;
  }

  closeDrawer(): void {
    this.isDrawerOpen = false;
  }

  openDropdown(): void {
    this.isDropdownOpen = true;
  }

  closeDropdown(): void {
    this.isDropdownOpen = false;
  }

  showToastMessage(message: string): void {
    this.toastMessage = message;
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }

  openConfirmationDialog(): void {
    this.isConfirmationDialogOpen = true;
  }

  confirmAction(): void {
    // Handle confirmation
    this.isConfirmationDialogOpen = false;
  }

  cancelAction(): void {
    // Handle cancellation
    this.isConfirmationDialogOpen = false;
  }

  copyCode(componentName: string): void {
    let codeSnippet = '';
    
    switch(componentName) {
      case 'app-product-card':
        codeSnippet = `<app-product-card 
  [product]="demoProducts[0]"
  (addToCart)="onAddToCart($event)"
  (toggleFavorite)="onToggleFavorite($event)">
</app-product-card>`;
        break;
      case 'app-product-grid':
        codeSnippet = `<app-product-grid [products]="demoProducts"></app-product-grid>`;
        break;
      case 'app-search-bar':
        codeSnippet = `<app-search-bar 
  [placeholder]="'Search products...'"
  (search)="onSearch($event)">
</app-search-bar>`;
        break;
      case 'app-search-suggestions':
        codeSnippet = `<app-search-suggestions 
  [suggestions]="demoSearchSuggestions"
  (selectSuggestion)="onSelectSuggestion($event)">
</app-search-suggestions>`;
        break;
      case 'app-modal':
        codeSnippet = `<button class="btn btn-primary" (click)="openModal()">Open Modal</button>
<app-modal 
  *ngIf="isModalOpen"
  [title]="'Sample Modal'"
  (close)="closeModal()">
  <p>This is a sample modal content.</p>
  <p>You can put any content here.</p>
</app-modal>`;
        break;
      case 'app-drawer':
        codeSnippet = `<button class="btn btn-primary" (click)="openDrawer()">Open Drawer</button>
<app-drawer 
  *ngIf="isDrawerOpen"
  [title]="'Sample Drawer'"
  (close)="closeDrawer()">
  <p>This is a sample drawer content.</p>
  <p>Drawers are useful for additional information or actions.</p>
</app-drawer>`;
        break;
      case 'app-dropdown':
        codeSnippet = `<app-dropdown 
  [isOpen]="isDropdownOpen"
  (toggle)="openDropdown()"
  (close)="closeDropdown()">
  <button class="btn btn-secondary">Open Dropdown</button>
  <div dropdown-content>
    <a href="#" class="dropdown-item">Item 1</a>
    <a href="#" class="dropdown-item">Item 2</a>
    <a href="#" class="dropdown-item">Item 3</a>
  </div>
</app-dropdown>`;
        break;
      case 'app-tabs':
        codeSnippet = `<app-tabs 
  [tabs]="[
    { id: 'tab1', label: 'Tab 1' },
    { id: 'tab2', label: 'Tab 2' },
    { id: 'tab3', label: 'Tab 3' }
  ]"
  [activeTab]="activeTab"
  (tabChange)="activeTab = $event">
</app-tabs>`;
        break;
      case 'app-accordion':
        codeSnippet = `<app-accordion>
  <app-accordion-item 
    *ngFor="let item of accordionItems" 
    [title]="item.title"
    [content]="item.content">
  </app-accordion-item>
</app-accordion>`;
        break;
      case 'app-toast':
        codeSnippet = `<button class="btn btn-primary" (click)="showToastMessage('This is a toast message!')">Show Toast</button>
<app-toast 
  *ngIf="showToast"
  [message]="toastMessage"
  [type]="'success'">
</app-toast>`;
        break;
      case 'app-skeleton':
        codeSnippet = `<app-skeleton [rows]="3"></app-skeleton>`;
        break;
      case 'app-loader':
        codeSnippet = `<app-loader></app-loader>`;
        break;
      case 'app-empty-state':
        codeSnippet = `<app-empty-state 
  [title]="'No products found'"
  [message]="'Try adjusting your search or filter to find what you\'re looking for.'"
  [icon]="'search'">
</app-empty-state>`;
        break;
      case 'app-error-state':
        codeSnippet = `<app-error-state 
  [title]="'Something went wrong'"
  [message]="'We couldn\'t load the content. Please try again later.'"
  [icon]="'error'">
</app-error-state>`;
        break;
      case 'app-confirmation-dialog':
        codeSnippet = `<button class="btn btn-primary" (click)="openConfirmationDialog()">Open Confirmation Dialog</button>
<app-confirmation-dialog 
  *ngIf="isConfirmationDialogOpen"
  [title]="'Confirm Action'"
  [message]="'Are you sure you want to perform this action?'"
  (confirm)="confirmAction()"
  (cancel)="cancelAction()">
</app-confirmation-dialog>`;
        break;
      default:
        codeSnippet = '';
    }

    if (codeSnippet) {
      navigator.clipboard.writeText(codeSnippet).then(() => {
        // Optional: Show a visual feedback that the text was copied
        console.log('Code snippet copied to clipboard');
      }).catch(err => {
        console.error('Failed to copy code snippet: ', err);
      });
    }
  }
}