import * as plugins from './smartunique.plugins';

/**
 * returns short strings that are unique to very high degree od certainty
 */
export const shortId = (): string => {
  return plugins.shortid.generate();
};

/**
 * returns strings that are unique to a very high degree of certainty
 */
export const uuid4 = (): string => {
  return plugins.uuid.v4();
};

export const uuid5 = (customStringArg: string, namespaceArg = plugins.uuid.v5.DNS): string => {
  return plugins.uuid.v5(customStringArg, namespaceArg);
};

export const uni = plugins.isounique.uni;
