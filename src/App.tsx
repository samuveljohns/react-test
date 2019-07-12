import React, { StatelessComponent } from 'react';
import './App.css';

interface TemperatureInputProps {
  temperature: any;
  scale: ScaleNames;
  onTemperatureChange: Function
}
interface CalculatorProps{
  temperature: any;
  scale: ScaleNames;
}
interface BoilingVerdictProps {
  celsius:any
}
interface CalculatorStats{
  temperature: any;
  scale: ScaleNames;
}
enum ScaleNames{
  c = 'Celsius',
  f = 'Fahrenheit'
}

function toCelsius(fahrenheit:any) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius: any) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature: string, convert: Function) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

const BoilingVerdict: StatelessComponent<BoilingVerdictProps> = (props)=>{
  if (props.celsius >= 100) {
    return (<p>The water would boil.</p>);
  }
  return (<p>The water would not boil.</p>);
}

class TemperatureInput extends React.Component<TemperatureInputProps, {}> {
  constructor(props: TemperatureInputProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: any) {
    this.props.onTemperatureChange(e.target.value);
  }

  render(): JSX.Element {
    const temperature = this.props.temperature;
    const scale:ScaleNames = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scale}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component<{},CalculatorStats> {
  constructor(props : CalculatorProps) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: ScaleNames.c};
  }

  handleCelsiusChange(temperature: string) {
    this.setState({scale: ScaleNames.c, temperature});
  }

  handleFahrenheitChange(temperature: string) {
    this.setState({scale: ScaleNames.f, temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === ScaleNames.f ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === ScaleNames.c ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale={ScaleNames.c}
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale={ScaleNames.f}
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}


export default Calculator;
