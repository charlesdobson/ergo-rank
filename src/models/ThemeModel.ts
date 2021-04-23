import { types } from 'mobx-state-tree';

export const ThemeModel = types
  .model({
    isDarkMode: types.boolean,
  })
  .actions((self) => ({
    toggleDarkMode() {
      self.isDarkMode = !self.isDarkMode;
    },
  }));
