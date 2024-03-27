function addPluginNameToRules(pluginName, rules) {
    return Object.keys(rules).reduce((result, key) => Object.assign(result, { [`${pluginName}/${key}`]: rules[key] }), {});
}
export function addPluginName(pluginName, rules) {
    if (rules instanceof Array) {
        return rules.reduce((result, group) => Object.assign(result, addPluginNameToRules(pluginName, group)), {});
    }
    return addPluginNameToRules(pluginName, rules);
}
//# sourceMappingURL=ruleTools.js.map