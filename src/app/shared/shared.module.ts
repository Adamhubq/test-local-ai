import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button.component';
import { IconButtonComponent } from './components/icon-button.component';
import { ButtonExampleComponent } from './components/button-example.component';
import { InputComponent } from './components/input.component';
import { TextareaComponent } from './components/textarea.component';
import { SelectComponent } from './components/select.component';
import { CheckboxComponent } from './components/checkbox.component';
import { RadioComponent } from './components/radio.component';
import { SwitchComponent } from './components/switch.component';
import { BadgeComponent } from './components/badge/badge.component';
import { ChipComponent } from './components/chip/chip.component';
import { BadgeExampleComponent } from './components/badge/badge-example.component';
import { ChipExampleComponent } from './components/chip/chip-example.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { DividerComponent } from './components/divider/divider.component';
import { PriceComponent } from './components/price/price.component';
import { AvatarExampleComponent } from './components/avatar/avatar-example.component';
import { DividerExampleComponent } from './components/divider/divider-example.component';
import { PriceExampleComponent } from './components/price/price-example.component';

import { RatingComponent } from './rating/rating.component';
import { RangePipe } from './rating/range.pipe';
import { RatingExampleComponent } from './rating/rating-example.component';

import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { PaginationComponent } from './components/pagination/pagination.component';

// New components for search
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchSuggestionsComponent } from './components/search-suggestions/search-suggestions.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalExampleComponent } from './components/modal/modal-example.component';

// Dropdown and Tabs components
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { TabsComponent } from './components/tabs/tabs.component';

// Accordion components
import { AccordionComponent } from './components/accordion/accordion.component';
import { AccordionItemComponent } from './components/accordion/accordion-item.component';
import { AccordionExampleComponent } from './components/accordion/accordion-example.component';

// Toast components
import { ToastComponent } from './components/toast/toast.component';
import { ToastContainerComponent } from './components/toast-container/toast-container.component';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { LoaderComponent } from './components/loader/loader.component';

// Confirmation Dialog component
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogExampleComponent } from './components/confirmation-dialog/confirmation-dialog-example.component';

// Empty State and Error State
import { EmptyStateComponent } from './components/empty-state/empty-state.component';
import { ErrorStateComponent } from './components/error-state/error-state.component';

@NgModule({
  declarations: [
    ButtonComponent,
    IconButtonComponent,
    ButtonExampleComponent,
    InputComponent,
    TextareaComponent,
    SelectComponent,
    CheckboxComponent,
    RadioComponent,
    SwitchComponent,
    BadgeComponent,
    ChipComponent,
    BadgeExampleComponent,
    ChipExampleComponent,
    AvatarComponent,
    DividerComponent,
    PriceComponent,
    AvatarExampleComponent,
    DividerExampleComponent,
    PriceExampleComponent,
    RatingComponent,
    RangePipe,
    RatingExampleComponent,
    BreadcrumbsComponent,
    PaginationComponent,
    SearchBarComponent,
    ModalComponent,
    SearchSuggestionsComponent,
    ModalExampleComponent,
    DropdownComponent,
    TabsComponent,
    AccordionComponent,
    AccordionItemComponent,
    AccordionExampleComponent,
    ToastComponent,
    ToastContainerComponent,
    SkeletonComponent,
    LoaderComponent,
    ConfirmationDialogComponent,
    ConfirmationDialogExampleComponent

    EmptyStateComponent,
    ErrorStateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    IconButtonComponent,
    ButtonExampleComponent,
    InputComponent,
    TextareaComponent,
    SelectComponent,
    CheckboxComponent,
    RadioComponent,
    SwitchComponent,
    BadgeComponent,
    ChipComponent,
    BadgeExampleComponent,
    ChipExampleComponent,
    AvatarComponent,
    DividerComponent,
    PriceComponent,
    AvatarExampleComponent,
    DividerExampleComponent,
    PriceExampleComponent,
    RatingComponent,
    BreadcrumbsComponent,
    PaginationComponent,
    SearchBarComponent,
    ModalComponent,
    SearchSuggestionsComponent,
    DropdownComponent,
    TabsComponent,
    AccordionComponent,
    AccordionItemComponent,
    AccordionExampleComponent,
    ToastComponent,
    ToastContainerComponent,
    SkeletonComponent,
    LoaderComponent,
    ConfirmationDialogComponent,
    ConfirmationDialogExampleComponent

    EmptyStateComponent,
    ErrorStateComponent
  ]
})
export class SharedModule { }