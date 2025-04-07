
/// <reference types="jest" />

declare namespace jest {
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

// Make this file a module to correctly scope the declarations
export {};
