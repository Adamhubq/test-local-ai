import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Basic components
import { ButtonComponent } from './components/button/button.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { InputComponent } from './components/input/input.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { SelectComponent } from './components/select/select.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { RadioComponent } from './components/radio/radio.component';
import { SwitchComponent } from './components/switch/switch.component';
import { ButtonExampleComponent } from './components/button-example/button-example.component';

// Badge and Chip components
import { BadgeComponent } from './components/badge/badge.component';
import { ChipComponent } from './components/chip/chip.component';
import { BadgeExampleComponent } from './components/badge/badge-example.component';
import { ChipExampleComponent } from './components/chip/chip-example.component';

// Avatar and Divider components
import { AvatarComponent } from './components/avatar/avatar.component';
import { DividerComponent } from './components/divider/divider.component';
import { AvatarExampleComponent } from './components/avatar/avatar-example.component';
import { DividerExampleComponent } from './components/divider/divider-example.component';

// Price component
import { PriceComponent } from './components/price/price.component';
import { PriceExampleComponent } from './components/price/price-example.component';

// Rating components
import { RatingComponent } from './rating/rating.component';
import { RangePipe } from './rating/range.pipe';
import { RatingExampleComponent } from './rating/rating-example.component';

// Modal components
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

// Product Card component
import { ProductCardComponent } from './components/product-card/product-card.component';

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
    ModalComponent,
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
    ConfirmationDialogExampleComponent,
    EmptyStateComponent,
    ErrorStateComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
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
    RangePipe,
    RatingExampleComponent,
    ModalComponent,
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
    ConfirmationDialogExampleComponent,
    EmptyStateComponent,
    ErrorStateComponent,
    ProductCardComponent
  ]
})
export class ComponentsModule { }