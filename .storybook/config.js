import { configure, addParameters, addDecorator } from '@storybook/react';
import { themes } from '@storybook/theming';


addParameters({
  options: {
    theme: themes.normal,
    name: 'Atom Design',
    isFullScreen: false,
    showAddonsPanel: true,
    showSearchBox: false
  }
});

// automatically import all files ending in *.stories.js
const req = require.context('../src/stories', true, /\.stories\.tsx$/);
console.log(req.keys());
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
