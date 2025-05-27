
/// <reference types="vite/client" />
/// <reference types="jest" />

// Adicionando uma importação direta para jest-dom pode ajudar o TypeScript a encontrar as definições de tipo.
// Isso garante que os matchers customizados como .toBeInTheDocument() sejam reconhecidos.
import '@testing-library/jest-dom';

// Declarações de extensão para resolver os erros de TypeScript nos testes
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
      toHaveAttribute(attr: string, value?: string): R;
    }
  }
}
