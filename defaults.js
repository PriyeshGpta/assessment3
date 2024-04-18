function defaults(obj, defaultProps) {
    for (const key in defaultProps) {
        if (defaultProps.hasOwnProperty(key) && !obj.hasOwnProperty(key)) {
            obj[key] = defaultProps[key];
        }
    }
    return obj;
}

module.exports = defaults;
