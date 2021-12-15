# Next.js with TypeScript 

## How to use
To run:

```sh
npm install
npm run dev
```

## How to lint

To lint:

```sh
npm run lint
```

## Primsa Database Setup

Model creation happens in the schema.prisma file.

To migrate:

```sh
npx prisma migrate dev
```

### *Configure the SQLITE EXPLORER (vscode)*

*command + shift + p > SQLITE open database > select dev.db*

### Open SQLite in browser

```sh
npx prisma studio
```

## The link component

Next.js has [a custom Link component](https://nextjs.org/docs/api-reference/next/link).
The example folder provides adapters for usage with MUI.
More information [in the documentation](https://mui.com/guides/routing/#next-js).
