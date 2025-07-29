import Vue from "vue";

/**
 * Vue 2 helper to reactively track feature flag state
 * @param {FeatureFlag} featureFlagInstance
 * @param {string} flagName
 * @returns {Vue} Vue observable object with `.enabled` reactive property
 */
function useFeatureFlag(featureFlagInstance, flagName) {
  // Create reactive object with initial flag value
  const state = Vue.observable({
    enabled: featureFlagInstance.isEnabled(flagName),
  });

  // Since FeatureFlag doesn't emit changes,
  // user must manually update by calling `refresh` method
  function refresh() {
    state.enabled = featureFlagInstance.isEnabled(flagName);
  }

  return {
    state,
    refresh,
  };
}

export { useFeatureFlag };
