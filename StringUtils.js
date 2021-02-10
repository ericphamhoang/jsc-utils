Object.assign(String.prototype, {
    Contains(needle : String) {
        return this.indexOf(needle) !== -1;
    },
    Equals(otherString:String) {
        return this === otherString;
    }
});