/**
 * Common state types for handling asynchronous operations
 */

export type LoadingState = 'loading' | 'success' | 'empty' | 'error';

export interface State<T> {
  status: LoadingState;
  data?: T;
  error?: string;
}

export interface LoadingStateData<T> {
  loading: boolean;
  success: boolean;
  empty: boolean;
  error: boolean;
  data?: T;
  errorText?: string;
}

/**
 * Utility functions for working with state objects
 */
export const createState = <T>(status: LoadingState, data?: T, error?: string): State<T> => ({
  status,
  data,
  error
});

export const createLoadingState = <T>(): State<T> => createState('loading');

export const createSuccessState = <T>(data: T): State<T> => createState('success', data);

export const createEmptyState = <T>(): State<T> => createState('empty');

export const createErrorState = <T>(error: string): State<T> => createState('error', undefined as T, error);

export const toLoadingStateData = <T>(state: State<T>): LoadingStateData<T> => ({
  loading: state.status === 'loading',
  success: state.status === 'success',
  empty: state.status === 'empty',
  error: state.status === 'error',
  data: state.data,
  errorText: state.error
});

export const isStateLoading = <T>(state: State<T>): boolean => state.status === 'loading';

export const isStateSuccess = <T>(state: State<T>): boolean => state.status === 'success';

export const isStateEmpty = <T>(state: State<T>): boolean => state.status === 'empty';

export const isStateError = <T>(state: State<T>): boolean => state.status === 'error';