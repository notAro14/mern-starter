# Webpack boilerplate for React

Use Webpack 5 to kick off your React projects

Pre requisites:

- node
- yarn

Install

```bash
yarn
```

Run development

```bash
yarn dev
```

Build

```bash
yarn build
```

Run production build

```bash
yarn build && yarn start
```

Format with Prettier:

```bash
yarn format
```

Lint with Eslint

```bash
yarn lint
```

Dependencies:

- React 17
- Webpack 5
- Loaders : babel-loader, sass-loader, style-loader, css-loader, postcss-loader
- ESlint: airbnb, react, prettier compatible
- Router : react-router-dom
- Pre commit Hook : husky, lint-staged
