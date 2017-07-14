"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./smartunique.plugins");
/**
 * returns short strings that are unique to very high degree od certainty
 */
exports.getShortId = () => {
    return plugins.shortid.generate();
};
/**
 * returns strings that are unique to a very high degree of certainty
 */
exports.getUuidv4 = () => {
    return plugins.uuidv4();
};
exports.getUuidv5 = (customStringArg, namespaceArg = plugins.uuidv5.DNS) => {
    return plugins.uuidv5(customStringArg, namespaceArg);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFnRDtBQUVoRDs7R0FFRztBQUNRLFFBQUEsVUFBVSxHQUFHO0lBQ3RCLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFBO0FBQ25DLENBQUMsQ0FBQTtBQUVEOztHQUVHO0FBQ1EsUUFBQSxTQUFTLEdBQUc7SUFDckIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQTtBQUN6QixDQUFDLENBQUE7QUFFVSxRQUFBLFNBQVMsR0FBRyxDQUFDLGVBQXVCLEVBQUUsWUFBWSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRztJQUNoRixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsWUFBWSxDQUFDLENBQUE7QUFDdEQsQ0FBQyxDQUFBIn0=