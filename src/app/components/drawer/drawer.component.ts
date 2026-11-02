import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements AfterViewInit, OnDestroy {
  @Input() isOpen: boolean = false;
  @Input() position: 'left' | 'right' | 'top' | 'bottom' = 'left';
  @Input() hasOverlay: boolean = true;
  @Input() lockScroll: boolean = true;
  @Output() isOpenChange = new EventEmitter<boolean>();
  
  @ViewChild('drawerElement') drawerElement!: ElementRef;
  
  private originalOverflow: string = '';
  private escapeKeyListener: ((event: KeyboardEvent) => void) | null = null;
  
  ngAfterViewInit(): void {
    if (this.isOpen) {
      this.open();
    }
  }
  
  ngOnDestroy(): void {
    this.close();
    this.removeEscapeKeyListener();
  }
  
  open(): void {
    this.isOpen = true;
    this.isOpenChange.emit(this.isOpen);
    
    if (this.lockScroll) {
      this.originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }
    
    // Focus the drawer element for accessibility
    setTimeout(() => {
      if (this.drawerElement?.nativeElement) {
        this.drawerElement.nativeElement.focus();
      }
    }, 0);
    
    this.addEscapeKeyListener();
  }
  
  close(): void {
    this.isOpen = false;
    this.isOpenChange.emit(this.isOpen);
    
    if (this.lockScroll && document.body.style.overflow === 'hidden') {
      document.body.style.overflow = this.originalOverflow;
    }
    
    this.removeEscapeKeyListener();
  }
  
  private addEscapeKeyListener(): void {
    this.removeEscapeKeyListener(); // Remove any existing listener to prevent duplicates
    
    this.escapeKeyListener = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && this.isOpen) {
        this.close();
      }
    };

    document.addEventListener('keydown', this.escapeKeyListener);
  }

  private removeEscapeKeyListener(): void {
    if (this.escapeKeyListener) {
      document.removeEventListener('keydown', this.escapeKeyListener);
      this.escapeKeyListener = null;
    }
  }
  
  @HostListener('click', ['$event'])
  handleClick(event: MouseEvent): void {
    // Close drawer when clicking on overlay
    if (this.hasOverlay && event.target === event.currentTarget) {
      this.close();
    }
  }
}