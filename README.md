# Laravel-feature-flag-js

A lightweight, framework-agnostic **feature flag manager** with helpers

---

## Features

- Enable, disable, toggle feature flags
- Check if a feature is enabled
- Load flags from a plain object or async API

---

## Installation

```bash
npm instal laravel-feature-flag-js
```

---

## Core Usage

```js
const { FeatureFlag } = require("laravel-feature-flag-js");

const flags = new FeatureFlag({ darkMode: false, betaFeature: true });

console.log(flags.isEnabled("darkMode")); // false

flags.enable("darkMode");
console.log(flags.isEnabled("darkMode")); // true

flags.toggle("betaFeature");
console.log(flags.isEnabled("betaFeature")); // false

// Load from API (async)
await flags.loadFromApi(() =>
  fetch("/api/feature-flags").then((res) => res.json())
);
```

---

## API Reference

### `new FeatureFlag(initialFlags: Record<string, boolean>)`

Create a new feature flag manager instance.

### Methods

- `enable(flag: string): void` — Enable a flag.
- `disable(flag: string): void` — Disable a flag.
- `toggle(flag: string): void` — Toggle a flag.
- `isEnabled(flag: string): boolean` — Check if a flag is enabled.
- `getAll(): Record<string, boolean>` — Get all flags.
- `loadFromObject(flags: Record<string, boolean>): void` — Load flags from an object.
- `loadFromApi(fetchFn: () => Promise<Record<string, boolean>>): Promise<void>` — Load flags from an async function.

## License

MIT © Filipe Fernandes
