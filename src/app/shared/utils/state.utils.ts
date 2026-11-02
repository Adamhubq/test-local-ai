/**
 * Utility functions for working with loading states
 */

import { State, LoadingStateData } from '../types/state.types';

/**
 * Transforms a state object into a more convenient data structure
 * with boolean flags for each state type
 */
export const toLoadingStateData = <T>(state: State<T>): LoadingStateData<T> => ({
  loading: state.status === 'loading',
  success: state.status === 'success',
  empty: state.status === 'empty',
  error: state.status === 'error',
  data: state.data,
  errorText: state.error
});

/**
 * Helper function to create a loading state
 */
export const createLoadingState = <T>(): State<T> => ({
  status: 'loading'
});

/**
 * Helper function to create a success state
 */
export const createSuccessState = <T>(data: T): State<T> => ({
  status: 'success',
  data
});

/**
 * Helper function to create an empty state
 */
export const createEmptyState = <T>(): State<T> => ({
  status: 'empty'
});

/**
 * Helper function to create an error state
 */
export const createErrorState = <T>(error: string): State<T> => ({
  status: 'error',
  error
});

/**
 * Type guards for checking state types
 */
export const isStateLoading = <T>(state: State<T>): boolean => state.status === 'loading';
export const isStateSuccess = <T>(state: State<T>): boolean => state.status === 'success';
export const isStateEmpty = <T>(state: State<T>): boolean => state.status === 'empty';
export const isStateError = <T>(state: State<T>): boolean => state.status === 'error';