# Nitro UI

![CI](https://github.com/nitro-bio/nitro-ui/actions/workflows/main.yml/badge.svg)

## React Component Library for Life Science

[Try before you buy!](https://storybook.nitro.bio) (...though this library is free)

### Quickstart

#### Install

```bash
npm i @ninjha01/nitro-ui
# or yarn add @ninjha01/nitro-ui
# or pnpm i @ninjha01/nitro-ui
```

#### Styling

This project is built on top of [tailwindcss](https://tailwindcss.com/).

If you also want to use tailwindcss in your project, you can follow the [installation instructions](https://tailwindcss.com/docs/installation) to get started.

Once you've done so, add `@ninjha01/nitro-ui` to your `tailwind.config.js` file:

```js
  content: [
    "...",
    "node_modules/@ninjha01/nitro-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
```

If you don't want to use tailwind in your project, you can import the compiled css file from the `dist` folder.

```js
import "path/to/node_modules/@ninjha01/nitro-ui/dist/nitro.css";
```

#### Components

##### Ariadne

###### CircularViewer

```typescript
const CircularViewerExample = () => {
  const [selection, setSelection] = useState<AriadneSelection | null>(null);
  const sequence = "ATGC".repeat(10);
  const annotations: Annotation[] = [
    {
      text: `Foo bar baz`,
      start: 5,
      end: 15,
      type: "CDS",
      direction: "forward",
      className: "bg-emerald-800",
      onClick: setSelection,
    },
  ];
  return (
    <CircularViewer
      sequence={sequence}
      annotations={annotations}
      selection={selection}
      setSelection={setSelection}
    />
  );
};
```

###### LinearViewer

###### SequenceViewer

##### Blast

###### GlobalAlignmentViz

###### TextAlignmentViz

### Developer Quick Start

```bash
pre-commit install
pnpm
pnpm dev
```

### Publish to npm

```bash
pnpm build
pnpm publish --access public
```

### Project Description

This is a component library for Nitro. It is built using [Vite](https://vitejs.dev/) and [Storybook](https://storybook.js.org/). It uses [Tailwind CSS](https://tailwindcss.com/) for styling and [CVA](https://github.com/joe-bell/cva) for managing those styles.

We use [pre-commit](https://pre-commit.com/) to run linting and formatting on our code. You can install it with `brew install pre-commit`.

### Seperation of Concerns

The components in this library aim for two seemingly opposing goals:

1. All relevant code to understand the style and functionality of a component is in one place.
2. The style and functionality of a component are cleanly seperated, and it's easy to understand how to use a component.

We reconcile these goals by using CVA, Tailwind, and Typescript. Typescript is used to define the levers used to change the behavior of a component, Tailwind is used to define the style of a component, and CVA is used to tie the two together.
