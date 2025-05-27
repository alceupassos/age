
/// <reference types="vite/client" />
/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />

// A diretiva de referência types="@testing-library/jest-dom" acima deve aumentar os matchers do Jest.
// Se os erros de tipo persistirem nos arquivos de teste (por exemplo, para toBeInTheDocument),
// verifique se o seu tsconfig.json inclui este arquivo e "jest", "@testing-library/jest-dom" em compilerOptions.types.
// Além disso, verifique o seu arquivo de configuração do Jest (por exemplo, setupTests.ts) para ver se '@testing-library/jest-dom' é importado lá.

