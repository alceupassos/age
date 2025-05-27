
/// <reference types="vite/client" />
/// <reference types="jest" />

// Adicionando uma importação direta para jest-dom pode ajudar o TypeScript a encontrar as definições de tipo.
// Isso garante que os matchers customizados como .toBeInTheDocument() sejam reconhecidos.
import '@testing-library/jest-dom';

