import { Component, ElementRef, HostListener, Input, OnInit, ViewChild, OnDestroy } from '@angular/core';

@Component({
  selector: 'nova-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit, OnDestroy {
  @Input() items: any[] = [];
  @Input() placeholder: string = 'Select an option';
  @Input() disabled: boolean = false;
  
  @ViewChild('dropdownButton', { static: true }) dropdownButton!: ElementRef;
  @ViewChild('dropdownMenu', { static: true }) dropdownMenu!: ElementRef;

  isOpen = false;
  selectedIndex = -1;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    // Clean up any event listeners if needed
  }

  toggleDropdown(): void {
    if (this.disabled) return;
    
    this.isOpen = !this.isOpen;
    this.selectedIndex = -1;
    
    if (this.isOpen) {
      // Focus the first item when opening
      setTimeout(() => {
        const firstItem = this.dropdownMenu.nativeElement.querySelector('[tabindex="0"]');
        if (firstItem) {
          firstItem.focus();
        }
      }, 0);
    } else {
      // Return focus to button when closing
      this.dropdownButton.nativeElement.focus();
    }
  }

  selectItem(item: any, index: number): void {
    this.selectedIndex = index;
    this.isOpen = false;
    // Handle selection logic here
    this.dropdownButton.nativeElement.focus(); // Return focus to button after selection
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
      this.selectedIndex = -1;
    }
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (!this.isOpen) return;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.selectedIndex = Math.min(this.selectedIndex + 1, this.items.length - 1);
        this.focusSelectedItem();
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.selectedIndex = Math.max(this.selectedIndex - 1, -1);
        this.focusSelectedItem();
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (this.selectedIndex >= 0) {
          this.selectItem(this.items[this.selectedIndex], this.selectedIndex);
        }
        break;
      case 'Escape':
        this.isOpen = false;
        this.selectedIndex = -1;
        this.dropdownButton.nativeElement.focus();
        break;
    }
  }

  private focusSelectedItem(): void {
    const items = this.dropdownMenu.nativeElement.querySelectorAll('[tabindex="0"]');
    if (this.selectedIndex >= 0 && this.selectedIndex < items.length) {
      items[this.selectedIndex].focus();
    }
  }
}