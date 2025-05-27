
/// <reference types="vite/client" />

// This line is crucial for making TypeScript aware of the custom Jest matchers
// provided by @testing-library/jest-dom, such as .toBeInTheDocument().
// It tells TypeScript to include the type definitions from this package.
/// <reference types="@testing-library/jest-dom" />

// The 'export {}' makes this file a module, which is standard practice
// for .d.ts files included in a TypeScript project.
export {};

