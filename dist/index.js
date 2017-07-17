"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./smartunique.plugins");
/**
 * returns short strings that are unique to very high degree od certainty
 */
exports.shortId = () => {
    return plugins.shortid.generate();
};
/**
 * returns strings that are unique to a very high degree of certainty
 */
exports.uuid4 = () => {
    return plugins.uuidv4();
};
exports.uuid5 = (customStringArg, namespaceArg = plugins.uuidv5.DNS) => {
    return plugins.uuidv5(customStringArg, namespaceArg);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFnRDtBQUVoRDs7R0FFRztBQUNRLFFBQUEsT0FBTyxHQUFHO0lBQ25CLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFBO0FBQ25DLENBQUMsQ0FBQTtBQUVEOztHQUVHO0FBQ1EsUUFBQSxLQUFLLEdBQUc7SUFDakIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQTtBQUN6QixDQUFDLENBQUE7QUFFVSxRQUFBLEtBQUssR0FBRyxDQUFDLGVBQXVCLEVBQUUsWUFBWSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRztJQUM1RSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsWUFBWSxDQUFDLENBQUE7QUFDdEQsQ0FBQyxDQUFBIn0=