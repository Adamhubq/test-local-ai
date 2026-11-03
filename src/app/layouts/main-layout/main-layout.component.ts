import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, SharedModule, HeaderComponent],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}