
/// <reference types="vite/client" />
/// <reference types="jest" />
import '@testing-library/jest-dom';

// The import of '@testing-library/jest-dom' should augment Jest's expect matchers.
// If type errors persist in test files (e.g., for toBeInTheDocument),
// ensure your tsconfig.json includes this file and "jest", "@testing-library/jest-dom" in compilerOptions.types.
// Also, check your Jest setup file (e.g., setupTests.ts) to see if '@testing-library/jest-dom' is imported there.
