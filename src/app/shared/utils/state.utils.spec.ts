import { State, LoadingStateData } from '../types/state.types';
import {
  toLoadingStateData,
  createLoadingState,
  createSuccessState,
  createEmptyState,
  createErrorState,
  isStateLoading,
  isStateSuccess,
  isStateEmpty,
  isStateError
} from './state.utils';

describe('State Utilities', () => {
  describe('createLoadingState', () => {
    it('should create a loading state', () => {
      const state = createLoadingState<string>();
      expect(state.status).toBe('loading');
      expect(state.data).toBeUndefined();
      expect(state.error).toBeUndefined();
    });
  });

  describe('createSuccessState', () => {
    it('should create a success state with data', () => {
      const data = 'test data';
      const state = createSuccessState<string>(data);
      expect(state.status).toBe('success');
      expect(state.data).toBe(data);
      expect(state.error).toBeUndefined();
    });
  });

  describe('createEmptyState', () => {
    it('should create an empty state', () => {
      const state = createEmptyState<string>();
      expect(state.status).toBe('empty');
      expect(state.data).toBeUndefined();
      expect(state.error).toBeUndefined();
    });
  });

  describe('createErrorState', () => {
    it('should create an error state with message', () => {
      const error = 'Something went wrong';
      const state = createErrorState<string>(error);
      expect(state.status).toBe('error');
      expect(state.data).toBeUndefined();
      expect(state.error).toBe(error);
    });
  });

  describe('toLoadingStateData', () => {
    it('should convert loading state to data structure', () => {
      const state = createLoadingState<string>();
      const result = toLoadingStateData(state);
      
      expect(result.loading).toBe(true);
      expect(result.success).toBe(false);
      expect(result.empty).toBe(false);
      expect(result.error).toBe(false);
      expect(result.data).toBeUndefined();
      expect(result.errorText).toBeUndefined();
    });

    it('should convert success state to data structure', () => {
      const data = 'test data';
      const state = createSuccessState<string>(data);
      const result = toLoadingStateData(state);
      
      expect(result.loading).toBe(false);
      expect(result.success).toBe(true);
      expect(result.empty).toBe(false);
      expect(result.error).toBe(false);
      expect(result.data).toBe(data);
      expect(result.errorText).toBeUndefined();
    });

    it('should convert empty state to data structure', () => {
      const state = createEmptyState<string>();
      const result = toLoadingStateData(state);
      
      expect(result.loading).toBe(false);
      expect(result.success).toBe(false);
      expect(result.empty).toBe(true);
      expect(result.error).toBe(false);
      expect(result.data).toBeUndefined();
      expect(result.errorText).toBeUndefined();
    });

    it('should convert error state to data structure', () => {
      const error = 'Something went wrong';
      const state = createErrorState<string>(error);
      const result = toLoadingStateData(state);
      
      expect(result.loading).toBe(false);
      expect(result.success).toBe(false);
      expect(result.empty).toBe(false);
      expect(result.error).toBe(true);
      expect(result.data).toBeUndefined();
      expect(result.errorText).toBe(error);
    });
  });

  describe('Type guards', () => {
    it('should correctly identify loading state', () => {
      const state = createLoadingState<string>();
      expect(isStateLoading(state)).toBe(true);
      expect(isStateSuccess(state)).toBe(false);
      expect(isStateEmpty(state)).toBe(false);
      expect(isStateError(state)).toBe(false);
    });

    it('should correctly identify success state', () => {
      const data = 'test data';
      const state = createSuccessState<string>(data);
      expect(isStateLoading(state)).toBe(false);
      expect(isStateSuccess(state)).toBe(true);
      expect(isStateEmpty(state)).toBe(false);
      expect(isStateError(state)).toBe(false);
    });

    it('should correctly identify empty state', () => {
      const state = createEmptyState<string>();
      expect(isStateLoading(state)).toBe(false);
      expect(isStateSuccess(state)).toBe(false);
      expect(isStateEmpty(state)).toBe(true);
      expect(isStateError(state)).toBe(false);
    });

    it('should correctly identify error state', () => {
      const error = 'Something went wrong';
      const state = createErrorState<string>(error);
      expect(isStateLoading(state)).toBe(false);
      expect(isStateSuccess(state)).toBe(false);
      expect(isStateEmpty(state)).toBe(false);
      expect(isStateError(state)).toBe(true);
    });
  });
});