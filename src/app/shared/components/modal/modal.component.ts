import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';

export interface ModalAction {
  label: string;
  type?: 'button' | 'submit' | 'reset';
  class?: string;
  handler?: () => void;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() title: string = '';
  @Input() actions: ModalAction[] = [];
  @Input() closeOnBackdropClick: boolean = true;
  @Input() closeOnEscape: boolean = true;
  @Input() isVisible: boolean = false;

  @Output() closed = new EventEmitter<void>();
  @Output() actionClicked = new EventEmitter<ModalAction>();

  @ViewChild('modalElement', { static: true }) modalElement!: ElementRef;

  private originalFocusElement: HTMLElement | null = null;
  private readonly titleId = `modal-title-${Math.random().toString(36).substr(2, 9)}`;
  private readonly contentId = `modal-content-${Math.random().toString(36).substr(2, 9)}`;

  ngOnInit(): void {
    if (this.isVisible) {
      this.open();
    }
  }

  ngOnDestroy(): void {
    this.close();
  }

  open(): void {
    this.originalFocusElement = document.activeElement as HTMLElement;
    document.body.classList.add('modal-open');
    this.focusModal();
    this.handleEscapeKey();
  }

  close(): void {
    if (this.isVisible) {
      document.body.classList.remove('modal-open');
      if (this.originalFocusElement) {
        this.originalFocusElement.focus();
      }
      this.closed.emit();
    }
  }

  onOverlayClick(event: MouseEvent): void {
    if (this.closeOnBackdropClick && event.target === event.currentTarget) {
      this.close();
    }
  }

  onActionClick(action: ModalAction): void {
    if (action.handler) {
      action.handler();
    }
    this.actionClicked.emit(action);
  }

  private focusModal(): void {
    setTimeout(() => {
      const modal = this.modalElement.nativeElement;
      if (modal) {
        modal.focus();
      }
    }, 0);
  }

  private handleEscapeKey(): void {
    const handleEscape = (event: KeyboardEvent) => {
      if (this.closeOnEscape && event.key === 'Escape' && this.isVisible) {
        this.close();
        document.removeEventListener('keydown', handleEscape);
      }
    };

    document.addEventListener('keydown', handleEscape);
  }
}