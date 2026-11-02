import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Breadcrumb } from './breadcrumbs.types';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        // Simplified approach - just show the current route path
        this.breadcrumbs = this.getCurrentBreadcrumbs();
      });
  }

  private getCurrentBreadcrumbs(): Breadcrumb[] {
    const breadcrumbs: Breadcrumb[] = [];
    
    // Get the current route segments
    const segments = this.router.url.split('/').filter(segment => segment);
    
    let url = '';
    for (let i = 0; i < segments.length; i++) {
      url += `/${segments[i]}`;
      
      // Skip the root path and create breadcrumbs for each segment
      if (i === 0 && segments[i] === '') continue;
      
      let label = this.formatLabel(segments[i]);
      
      // Special handling for slugs - we'll use a placeholder
      if (segments[i].startsWith(':')) {
        const slugName = segments[i].substring(1);
        label = slugName.charAt(0).toUpperCase() + slugName.slice(1);
      }
      
      breadcrumbs.push({
        label,
        url
      });
    }
    
    return breadcrumbs;
  }

  private formatLabel(label: string): string {
    if (!label) return '';
    
    // Convert snake_case or kebab-case to space-separated words
    return label
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
  }
}