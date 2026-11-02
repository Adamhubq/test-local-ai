import { Component, Input, ContentChildren, QueryList, AfterViewInit, OnDestroy } from '@angular/core';
import { AccordionItemComponent } from './accordion-item.component';

@Component({
  selector: 'nova-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements AfterViewInit, OnDestroy {
  @Input() multi = false;
  @Input() ariaLabel?: string;

  @ContentChildren(AccordionItemComponent) accordionItems!: QueryList<AccordionItemComponent>;

  ngAfterViewInit(): void {
    // Initialize the first item as active if none are active
    if (this.accordionItems && this.accordionItems.length > 0) {
      const activeItems = this.accordionItems.filter(item => item.active);
      if (activeItems.length === 0) {
        this.accordionItems.first.active = true;
      }
    }
  }

  ngOnDestroy(): void {
    // Clean up any subscriptions or resources if needed
  }

  toggleItem(item: AccordionItemComponent): void {
    if (this.multi) {
      // Multiple mode - toggle the clicked item
      item.active = !item.active;
    } else {
      // Single mode - close all items except the clicked one
      this.accordionItems.forEach(accordionItem => {
        if (accordionItem === item) {
          accordionItem.active = !accordionItem.active;
        } else {
          accordionItem.active = false;
        }
      });
    }
  }

  getAriaControls(item: AccordionItemComponent): string {
    return `accordion-content-${item.id}`;
  }
}