
/// <reference types="vite/client" />

// Ensure Jest types are available
/// <reference types="jest" />

// Ensure Jest-DOM matchers are available to TypeScript
// This imports the type augmentations for Jest's `expect`
import '@testing-library/jest-dom/matchers';

declare global {
  // This namespace merge is often needed if auto-augmentation isn't working
  namespace jest {
    interface Matchers<R = void, T = {}> extends import('@testing-library/jest-dom/matchers').JestMatchers<R> {}
  }
}

export {}; // Keep it a module

