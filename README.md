# React TypeScript template with Vite

This is a [React](https://reactjs.org) + [TypeScript](https://www.typescriptlang.org/) boilerplate built with [Vite](https://vitejs.dev).

## What's inside?

- [ReactJS](https://reactjs.org)
- [Vite](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Jest](https://jestjs.io)
- [Testing Library](https://testing-library.com)
- [Cypress](https://www.cypress.io)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Polyfills](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy#readme)

## Getting started

1. Install dependencies.

   ```bash
   yarn install
   ```

2. Start dev server with hot reload at http://localhost:3000.
   ```bash
   yarn run dev
   ```

## Getting started with docker 

1. Run building process with docker

   ```bash
   docker build .
   ```

2. Start dev server at http://localhost:4000.
   ```bash
   docker run -p 4000:80 container_id
   ```

## Recommended VS Code extensions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Other commands

### Lint commands

```bash
yarn run lint
```

### Build commands

```bash
yarn run build
```

### Run the app in production mode at http://localhost:3000.

```bash
yarn run serve
```

### Test commands

- Run unit tests and watch
  ```bash
  yarn run test:unit
  ```
- Run unit tests with coverage
  ```bash
  yarn run test:unit:coverage
  ```
- Run e2e tests
  ```bash
  yarn run test:e2e
  ```

## License

This project is licensed under the MIT License.
