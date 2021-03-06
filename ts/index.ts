import * as plugins from './smartunique.plugins';

/**
 * returns short strings that are unique to very high degree od certainty
 */
export let shortId = (): string => {
  return plugins.shortid.generate();
};

/**
 * returns strings that are unique to a very high degree of certainty
 */
export let uuid4 = (): string => {
  return plugins.uuidv4();
};

export let uuid5 = (customStringArg: string, namespaceArg = plugins.uuidv5.DNS): string => {
  return plugins.uuidv5(customStringArg, namespaceArg);
};
