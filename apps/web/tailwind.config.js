const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');


//const sharedTailwindConfig = require('@irbweb/tailwind');
//const sharedTailwindConfig = require('../../libs/web/shared/common/tailwind/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  //presets: [sharedTailwindConfig],
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};