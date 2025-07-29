import { writable } from "svelte/store";

/**
 * Creates a Svelte store for a given feature flag
 * @param {FeatureFlag} featureFlagInstance
 * @param {string} flagName
 * @returns {import('svelte/store').Writable<boolean>}
 */
function useFeatureFlag(featureFlagInstance, flagName) {
  const { subscribe, set } = writable(featureFlagInstance.isEnabled(flagName));

  // Optionally: you could add a method to update the store if flags change,
  // but the core FeatureFlag class doesn't emit events yet.

  return {
    subscribe,
    // Optionally expose a manual refresh
    refresh: () => set(featureFlagInstance.isEnabled(flagName)),
  };
}

export { useFeatureFlag };
