# lotteCard

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

https://codesandbox.io/p/sandbox/26mjowzpr?file=%2Fsrc%2Findex.js

# variables

## daisy

:root {
--color-base-100: #fff;
--color-base-200: #f5f6f7;
--color-base-300: #ededed;
--color-base-content: #000;
--color-primary: #5ddbdb;
--color-primary-content: #000;
--color-secondary: #000046;
--color-secondary-content: #fff;
--color-accent: #ff2860;
--color-accent-content: #fff;
--color-neutral: #1f1f1f;
--color-neutral-content: #fff;
--color-info: #2a7eff;
--color-info-content: #fff;
--color-success: #00ba7b;
--color-success-content: #000;
--color-warning: #ffbf0f;
--color-warning-content: #000;
--color-error: #f33d48;
--color-error-content: #000;
}

## colors

:root {
--color-white: #fff;
--color-gray-50: #f5f6f7;
--color-gray-100: #ededed;
--color-gray-200: #dedede;
--color-gray-300: #c5c5c5;
--color-gray-400: #b5b5b5;
--color-gray-500: #949494;
--color-gray-600: #777;
--color-gray-700: #616161;
--color-gray-800: #555;
--color-gray-900: #3f3f3f;
--color-gray-950: #1f1f1f;
--color-black: #000;
--color-mint-50: #effbfb;
--color-mint-100: #def8f8;
--color-mint-200: #bcf0f0;
--color-mint-300: #9feaea;
--color-mint-400: #7ee2e2;
--color-mint-500: #5ddbdb;
--color-mint-600: #2dcccc;
--color-mint-700: #229a9a;
--color-mint-800: #166464;
--color-mint-900: #0b3232;
--color-mint-950: #061919;
--dark-100-5: #0000000d;
--dark-100-10: #0000001a;
--dark-100-15: #00000026;
--dark-100-30: #0000004d;
--dark-100-50: #00000080;
--dark-100-75: #000000bf;
--dark-100-80: #000c;
--light-100-60: #fff9;
--light-100-50: #ffffff80;
}

## check in seoul

:root {
--color-text-primary: var(--color-mint-700);
--color-text-secondary: var(--color-secondary);
--color-text-title: var(--color-base-content);
--color-text-body-1: var(--color-gray-700);
--color-text-body-2: var(--color-gray-600);
--color-text-body-3: var(--color-gray-500);
--color-text-body-4: var(--color-gray-400);
--color-text-white: var(--color-base-100);
--color-btn-primary: var(--color-primary);
--color-btn-primary-content: var(--color-primary-content);
--color-btn-secondary: var(--color-neutral);
--color-btn-secondary-content: var(--color-secondary-content);
--color-btn-neutral: var(--color-base-300);
--color-btn-neutral-content: var(--color-base-content);
--color-border-1: var(--color-base-200);
--color-border-2: var(--color-base-300);
--color-border-3: var(--color-gray-200);
--color-border-4: var(--color-gray-300);
--color-border-5: var(--color-neutral);
--dim-bg: var(--Color\/States\/dark-100-50);
--dim-toast: var(--Color\/States\/dark-100-75);
--text-xxs: 12px;
--text-xs: 13px;
--text-sm: 14px;
--text-md: 16px;
--text-lg: 18px;
--text-xl: 20px;
--text-2xl: 24px;
--text-3xl: 30px;
--text-4xl: 36px;
}

## response

:root {
--radius-none: 0px;
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-xl: 12px;
--radius-2xl: 16px;
--radius-full: 9999px;
--spacing-1: 2px;
--spacing-2: 4px;
--spacing-3: 8px;
--spacing-4: 12px;
--spacing-5: 16px;
--spacing-6: 20px;
--spacing-7: 24px;
--spacing-8: 32px;
--spacing-9: 40px;
--spacing-10: 48px;
}
