import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import App,{TemperatureInput,BoilingVerdict} from '../src/App'


const celsiusData = {scale:'celsius',temperature:100,onTemperatureChange:action('handleCelsiusChange')}
const fahrenheitData = {scale:'fahrenheit',temperature:212,onTemperatureChange:action('handleFahrenheitChange')}
const boilingVerdictData = {celsius:100}
storiesOf('Calculator',module)
  .add('BoilingVerdict - Celsius greater than 100',()=><BoilingVerdict celsius={100} />)
  .add('BoilingVerdict - less than 100',()=><BoilingVerdict celsius={50} />)
  .add('TemperatureInput',() =>
    <div>
      <TemperatureInput {...celsiusData}/>
      <TemperatureInput {...fahrenheitData}/>
      <BoilingVerdict {...boilingVerdictData}/>
    </div>
  )
  .add('Calculator',() => <App />)

