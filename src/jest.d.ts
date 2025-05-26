
// This directive helps TypeScript locate and load type definitions from @testing-library/jest-dom.
/// <reference types="@testing-library/jest-dom" />

// Making this file a module by adding an empty export is crucial for 'declare global' to work as expected.
export {};

declare global {
  namespace jest {
    // Augment Jest's Matchers interface.
    // R is the return type of the matcher (typically void for assertions).
    // T is the type of the 'this' context within the matcher, often HTMLElement for DOM assertions.
    // The error messages like 'Matchers<void, HTMLElement>' suggest T is HTMLElement here.
    interface Matchers<R, T = HTMLElement> {
      toBeInTheDocument(): R;
      toHaveTextContent(text: string | RegExp): R;
      toBeVisible(): R;
      toBeChecked(): R;
      toHaveClass(className: string): R;
      toHaveValue(value: string | string[] | number | null): R;
      toBeDisabled(): R;
      toBeEnabled(): R;
      toHaveAttribute(attr: string, value?: any): R; // value can be any type, or undefined for presence check
      toBeRequired(): R;
      toHaveStyle(css: string | Record<string, any>): R; // css can be a string (e.g., 'display: block') or an object
      toBeEmptyDOMElement(): R;
      toBeInvalid(): R;
      toBeValid(): R;
      toHaveFocus(): R;
      toContainElement(element: Element | null): R;
      toContainHTML(html: string): R;
      toBePartiallyChecked(): R;

      /**
       * @deprecated Prefer .toBeEmptyDOMElement() or check .textContent === '' for DOM elements.
       * For other uses, consider a more specific matcher.
       */
      toBeEmpty(): R;
    }
  }
}

