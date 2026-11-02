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
}