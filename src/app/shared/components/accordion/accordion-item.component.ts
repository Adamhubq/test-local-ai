import { Component, Input, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'nova-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss']
})
export class AccordionItemComponent implements OnInit {
  @Input() title = '';
  @Input() active = false;
  @Input() id = '';

  @HostBinding('class.accordion-item') hostClass = true;

  ngOnInit(): void {
    if (!this.id) {
      this.id = `accordion-item-${Math.random().toString(36).substr(2, 9)}`;
    }
  }

  toggle(): void {
    // This will be handled by the parent accordion component
  }
}