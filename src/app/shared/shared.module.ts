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
    SearchSuggestionsComponent
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
    SearchSuggestionsComponent
  ]
})
export class SharedModule { }