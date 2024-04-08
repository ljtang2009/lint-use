import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';

import { ObjectVisualizer } from 'object-visualizer';
import 'object-visualizer/dist/index.min.css';

const config: Theme = {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ObjectVisualizer', ObjectVisualizer);
  },
};

export default config;
