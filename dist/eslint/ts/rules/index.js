import base from './base.js';
import stylistic from './stylistic.js';
import recommended from './recommended.js';
import strict from './strict.js';
import { addPluginName } from '../../../util/ruleTools.js';
const ruleGroups = [base, stylistic, recommended, strict];
function getRules(pluginName) {
    return addPluginName(pluginName, ruleGroups);
}
export default { getRules };
//# sourceMappingURL=index.js.map