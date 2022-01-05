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

## The link component

Next.js has [a custom Link component](https://nextjs.org/docs/api-reference/next/link).
The example folder provides adapters for usage with MUI.
More information [in the documentation](https://mui.com/guides/routing/#next-js).

## Running on IOS

install Xcode

https://capacitorjs.com/docs/ios

Make sure to use: 

sudo arch -x86_64 gem install ffi

Then

Inside the ios/App
arch -x86_64 pod install

Then running:

"npx cap run ios" and picking the iphone/device
AS well as running the normal above "npm run dev" to start the "server"
