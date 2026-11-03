import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    // Export only what's needed, not the entire ComponentsModule
    // Individual components should be imported where they're used
  ]
})
export class SharedModule { }