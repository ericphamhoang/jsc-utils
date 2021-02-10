Object.assign(String.prototype, {
    Contains(needle) {
        return this.indexOf(needle) !== -1;
    }
});