import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nova-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() tabs: any[] = [];
  @Input() activeTabId: string = '';

  constructor() { }

  ngOnInit(): void {}

  selectTab(tabId: string): void {
    this.activeTabId = tabId;
  }

  isActive(tabId: string): boolean {
    return this.activeTabId === tabId;
  }
}