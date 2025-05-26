
/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />

// This file augments the Jest namespace with custom matchers from testing-library
// This ensures that TypeScript recognizes matchers like .toBeInTheDocument()

interface CustomMatchers<R = unknown> {
  toBeInTheDocument(): R;
  toHaveTextContent(text: string | RegExp): R;
  toBeVisible(): R;
  toBeChecked(): R;
  toHaveClass(className: string): R;
  toHaveValue(value: string | string[] | number | null): R;
  toBeDisabled(): R;
  toBeEnabled(): R;
  toHaveAttribute(attr: string, value?: string): R;
  toBeRequired(): R;
}

declare global {
  namespace jest {
    interface Expect extends CustomMatchers {}
    interface Matchers<R> extends CustomMatchers<R> {}
    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

// This empty export is needed to make this file a module
export {};
