
import '@testing-library/jest-dom';

declare global {
  namespace jest {
    interface Expect extends jest.Matchers {}
    interface Matchers<R> extends jest.Matchers<R> {}
    interface InverseAsymmetricMatchers extends jest.Matchers {}
  }
}

export {};
