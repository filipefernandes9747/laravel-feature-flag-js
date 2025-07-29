const { ref, watchEffect } = require("vue");

/**
 * Vue 3 composable for feature flags
 * @param {FeatureFlag} featureFlagInstance
 * @param {string} flagName
 */
function useFeatureFlag(featureFlagInstance, flagName) {
  const enabled = ref(featureFlagInstance.isEnabled(flagName));

  // Watch flag and update reactive ref
  watchEffect(() => {
    enabled.value = featureFlagInstance.isEnabled(flagName);
  });

  return enabled;
}

module.exports = { useFeatureFlag };
