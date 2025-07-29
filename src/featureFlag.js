class FeatureFlag {
  constructor(initialFlags = {}) {
    this.flags = { ...initialFlags };
  }

  enable(flag) {
    this.flags[flag] = true;
  }

  disable(flag) {
    this.flags[flag] = false;
  }

  isEnabled(flag) {
    return !!this.flags[flag];
  }

  toggle(flag) {
    this.flags[flag] = !this.flags[flag];
  }

  getAll() {
    return { ...this.flags };
  }

  loadFromObject(obj) {
    this.flags = { ...obj };
  }

  async loadFromApi(fetchFn) {
    const data = await fetchFn();
    this.loadFromObject(data);
  }
}

module.exports = FeatureFlag;
