
/// <reference types="jest" />

declare global {
  namespace jest {
    // Add matchers to both normal and asymmetric matchers
    interface AsymmetricMatchers {
      toBeInTheDocument(): void;
      toHaveTextContent(text: string | RegExp): void;
      toHaveClass(className: string): void;
      toBeVisible(): void;
      toBeDisabled(): void;
      toBeEnabled(): void;
      toBeChecked(): void;
      toHaveAttribute(attr: string, value?: string | RegExp): void;
      toHaveValue(value: string | string[] | number | null): void;
      toBeEmpty(): void;
      toHaveStyle(css: Record<string, any>): void;
      toContainElement(element: HTMLElement | null): void;
      toContainHTML(html: string): void;
      toHaveFocus(): void;
      toHaveFormValues(values: Record<string, any>): void;
    }

    interface Matchers<R, T = any> {
      toBeInTheDocument(): R;
      toHaveTextContent(text: string | RegExp): R;
      toHaveClass(className: string): R;
      toBeVisible(): R;
      toBeDisabled(): R;
      toBeEnabled(): R;
      toBeChecked(): R;
      toHaveAttribute(attr: string, value?: string | RegExp): R;
      toHaveValue(value: string | string[] | number | null): R;
      toBeEmpty(): R;
      toHaveStyle(css: Record<string, any>): R;
      toContainElement(element: HTMLElement | null): R;
      toContainHTML(html: string): R;
      toHaveFocus(): R;
      toHaveFormValues(values: Record<string, any>): R;
    }
  }
}

export {};
