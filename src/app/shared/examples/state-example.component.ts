import { Component, OnInit } from '@angular/core';
import { State, LoadingStateData } from '../types/state.types';
import {
  createLoadingState,
  createSuccessState,
  createEmptyState,
  createErrorState,
  toLoadingStateData
} from '../utils/state.utils';

@Component({
  selector: 'app-state-example',
  template: `
    <div>
      <h3>State Example</h3>
      
      <!-- Loading state -->
      <div *ngIf="stateData.loading" class="loading">
        Loading...
      </div>
      
      <!-- Success state -->
      <div *ngIf="stateData.success" class="success">
        <p>Data: {{ stateData.data }}</p>
      </div>
      
      <!-- Empty state -->
      <div *ngIf="stateData.empty" class="empty">
        No data available
      </div>
      
      <!-- Error state -->
      <div *ngIf="stateData.error" class="error">
        <p>Error: {{ stateData.errorText }}</p>
      </div>
      
      <button (click)="loadData()">Load Data</button>
      <button (click)="setError()">Set Error</button>
      <button (click)="setEmpty()">Set Empty</button>
    </div>
  `,
  styles: [`
    .loading, .success, .empty, .error {
      padding: 10px;
      margin: 5px 0;
    }
    
    .loading { background-color: #e3f2fd; }
    .success { background-color: #e8f5e9; }
    .empty { background-color: #fff3e0; }
    .error { background-color: #ffebee; }
  `]
})
export class StateExampleComponent implements OnInit {
  state: State<string> = createLoadingState<string>();
  stateData: LoadingStateData<string> = toLoadingStateData(this.state);

  ngOnInit() {
    // Initialize with loading state
    this.state = createLoadingState<string>();
    this.stateData = toLoadingStateData(this.state);
  }

  loadData() {
    // Simulate data loading
    this.state = createLoadingState<string>();
    this.stateData = toLoadingStateData(this.state);
    
    setTimeout(() => {
      this.state = createSuccessState<string>('Sample data loaded successfully');
      this.stateData = toLoadingStateData(this.state);
    }, 1000);
  }

  setError() {
    this.state = createErrorState<string>('Failed to load data');
    this.stateData = toLoadingStateData(this.state);
  }

  setEmpty() {
    this.state = createEmptyState<string>();
    this.stateData = toLoadingStateData(this.state);
  }
}