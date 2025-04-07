
// Custom type definitions for @testing-library/jest-dom
import '@testing-library/jest-dom';

declare namespace jest {
  interface Matchers<R = unknown> {
    toBeInTheDocument(): R;
    toBeVisible(): R;
    toBeEmpty(): R;
    toBeDisabled(): R;
    toBeEnabled(): R;
    toBeInvalid(): R;
    toBeRequired(): R;
    toBeChecked(): R;
    toBePartiallyChecked(): R;
    toHaveAttribute(attr: string, value?: string): R;
    toHaveClass(...classNames: string[]): R;
    toHaveStyle(css: Record<string, any>): R;
    toHaveTextContent(text: string | RegExp, options?: { normalizeWhitespace: boolean }): R;
    toHaveValue(value?: string | string[] | number): R;
    toHaveFocus(): R;
    toContainElement(element: HTMLElement | null): R;
    toContainHTML(htmlText: string): R;
    toBeEmptyDOMElement(): R;
    toHaveDescription(text?: string | RegExp): R;
  }
}

// Extend global Jest namespaces
declare global {
  namespace jest {
    interface Expect extends Matchers {}
    interface Matchers<R> extends Matchers<R> {}
    interface InverseAsymmetricMatchers extends Matchers {}
  }
}

export {};
