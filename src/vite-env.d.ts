
/// <reference types="vite/client" />
/// <reference types="jest" />

// This import should be sufficient to augment Jest's matchers
// with types from @testing-library/jest-dom.
import '@testing-library/jest-dom';

// If you still face issues, you might need to ensure your tsconfig.json
// is correctly set up to include type definitions or that there are no
// conflicting global type declarations elsewhere in your project for Jest matchers.
// For example, ensure "types": ["jest", "@testing-library/jest-dom"] is in compilerOptions
// or that a setup file importing '@testing-library/jest-dom' is included.

// The previous global declaration was:
/*
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toHaveAttribute(attr: string, value?: string): R;
      toBeVisible(): R;
      toHaveTextContent(text: string | RegExp): R;
      toHaveValue(value: string | number | string[]): R;
      toBeDisabled(): R;
      toBeEnabled(): R;
      toBeRequired(): R;
      toBeChecked(): R;
      toHaveStyle(style: string): R;
      toHaveClass(className: string): R;
      toContainElement(element: HTMLElement | null): R;
    }
  }
}
*/
// This is often not needed if @testing-library/jest-dom is imported correctly.
