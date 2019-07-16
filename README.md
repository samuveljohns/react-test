
## Unit testing React Lifting State up example
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br />
Lifting State up example - https://reactjs.org/docs/lifting-state-up.html

## Features
Demo app features
- Ported Javascript to Typescript
- Unit test using jest
- Interaction test using Enzyme
- Added storybook
- Snapshot testing with storyshot addon to automated snapshot testing for stories
- Automated Visual Testing using storybook and puppeteer

### `yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn run test:unit`

Launches the test runner in the interactive watch mode.<br>

### `yarn run test:integration`

To run the Automated visual testing.
For testing changed the text it is captured in Visual testing and stored as image in /src/tests/integration/__image_snapshots__/__diff_output__/ directory

![Visual test example](https://github.com/samuveljohns/react-test/blob/master/src/tests/integration/__image_snapshots__/__diff_output__/calculator-test-js-calculator-visually-looks-correct-1-diff.png)


### `yarn run test -- --coverage`

To run the test coverage

## Example app screenshots 
![React JS Lifting State up](https://reactjs.org/react-devtools-state-ef94afc3447d75cdc245c77efb0d63be.gif)

### Unit test script
![unit test script](https://github.com/samuveljohns/jest-demo/blob/master/Screenshot%202019-07-13%20at%201.35.15%20AM.png)

### To do from scratch

## 1. Create react app with typescript

npx create-react-app my-app --typescript
or 
yarn create react-app my-app --typescript

## 2. Add Enzyme
npm i --save-dev enzyme enzyme-adapter-react-16
or 
yarn add enzyme enzyme-adapter-react-16 -d

and create setupConfig.js by following https://airbnb.io/enzyme/
## 3. Add storybook
npx -p @storybook/cli sb init --type react

Add storybook addons
yarn add --dev @storybook/addon-storyshots react-test-renderer require-context.macro

- create storybook.test.js
```
// src/storybook.test.js

import initStoryshots from '@storybook/addon-storyshots';
initStoryshots();
```
- add config.js

```
// .storybook/config.js

import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';

import '../src/index.css';

const req = requireContext('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
```
Reference: 
- https://storybook.js.org/docs/guides/guide-react/
- https://www.learnstorybook.com/react/en/simple-component/

## 3. Add Automated visual testing
yarn add puppeteer jest-puppeteer jest-image-snapshot start-server-and-test --dev

Follow for other configurations:https://storybook.js.org/docs/testing/automated-visual-testing/#example-using-puppeteer-and-jest







