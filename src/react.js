const { useState, useEffect } = require("react");

/**
 * React hook to subscribe to feature flag status
 * @param {FeatureFlag} featureFlagInstance
 * @param {string} flagName
 */
function useFeatureFlag(featureFlagInstance, flagName) {
  const [enabled, setEnabled] = useState(
    featureFlagInstance.isEnabled(flagName)
  );

  useEffect(() => {
    // NOTE: This basic version doesn't support live updates
    // You could extend FeatureFlag with an event emitter to notify changes
    setEnabled(featureFlagInstance.isEnabled(flagName));
  }, [featureFlagInstance, flagName]);

  return enabled;
}

module.exports = { useFeatureFlag };
