
import '@testing-library/jest-dom';

declare global {
  namespace jest {
    interface Expect extends jest.Matchers<any> {}
    interface Matchers<R = unknown> extends jest.Matchers<R> {}
    interface InverseAsymmetricMatchers extends jest.Matchers<any> {}
  }
}

export {};
