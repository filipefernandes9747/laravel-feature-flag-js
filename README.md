# Laravel-feature-flag-js

A lightweight, framework-agnostic **feature flag manager** with helpers/hooks for **React**, **Vue 2**, **Vue 3**, **Angular**, and **Svelte**.

---

## Features

- Enable, disable, toggle feature flags
- Check if a feature is enabled
- Load flags from a plain object or async API
- React hook for easy flag access
- Vue 3 composable for reactive flags
- Angular service to manage flags with observables
- Svelte store for reactive flag status

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

## React Hook

```jsx
import React from "react";
import { FeatureFlag, useFeatureFlagReact } from "laravel-feature-flag-js";

const flags = new FeatureFlag({ darkMode: true });

function App() {
  const darkModeEnabled = useFeatureFlagReact(flags, "darkMode");

  return <div>{darkModeEnabled ? "Dark Mode ON" : "Dark Mode OFF"}</div>;
}
```

---

## Vue 2 Helper

```js
import Vue from "vue";
import { FeatureFlag, useFeatureFlagVue2 } from "laravel-feature-flag-js";

const flags = new FeatureFlag({ betaFeature: true });

export default {
  data() {
    return {
      feature: useFeatureFlagVue2(flags, "betaFeature"),
    };
  },
  template: `
    <div>
      <p v-if="feature.state.enabled">Beta feature enabled</p>
      <p v-else>Beta feature disabled</p>
      <button @click="toggleFeature">Toggle</button>
    </div>
  `,
  methods: {
    toggleFeature() {
      flags.toggle("betaFeature");
      this.feature.refresh(); // manually refresh reactive state
    },
  },
};
```

---

---

## Vue 3 Composable

```js
import { createApp } from "vue";
import { FeatureFlag, useFeatureFlagVue } from "laravel-feature-flag-js";

const flags = new FeatureFlag({ betaFeature: true });

const app = createApp({
  setup() {
    const betaFeatureEnabled = useFeatureFlagVue(flags, "betaFeature");
    return { betaFeatureEnabled };
  },
  template: `<div>{{ betaFeatureEnabled ? 'Beta enabled' : 'Beta disabled' }}</div>`,
});

app.mount("#app");
```

---

## Angular Service

```ts
import { Component } from "@angular/core";
import { FeatureFlagService } from "laravel-feature-flag-js";

@Component({
  selector: "app-root",
  template: `
    <div *ngIf="featureFlagService.isEnabled('darkMode')">Dark mode ON</div>
    <div *ngIf="!featureFlagService.isEnabled('darkMode')">Dark mode OFF</div>
  `,
})
export class AppComponent {
  constructor(public featureFlagService: FeatureFlagService) {
    this.featureFlagService.loadFlags({ darkMode: true, betaFeature: false });
  }
}
```

---

## Svelte Store

```svelte
<script>
  import { FeatureFlag, useFeatureFlagSvelte } from 'laravel-feature-flag-js';

  const flags = new FeatureFlag({ darkMode: true });
  const darkMode = useFeatureFlagSvelte(flags, 'darkMode');
</script>

{#if $darkMode}
  <p>Dark mode is enabled!</p>
{:else}
  <p>Dark mode is disabled.</p>
{/if}
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
