/**
 * @todo tsyringe ioc
 */

import { IMarkdownConverter, RemarkConverter } from '_core/markdown';

export const markdownConverterSingleton = () => {
  let instance: null | IMarkdownConverter;

  function createInstance(): IMarkdownConverter {
    // Set here all the env variables...
    return new RemarkConverter();
  }
  return {
    getInstance: (): IMarkdownConverter => {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
    unregisterInstance: () => {
      instance = null;
    },
  };
};
