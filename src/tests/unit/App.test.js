import React from 'react';
import { shallow } from 'enzyme';
import App,{toCelsius,toFahrenheit,BoilingVerdict} from '../../App';
it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
});

it('validate celsius',()=>{

  expect(toCelsius(41)).toBe(5);

})
it('validate Farenheit',()=>{

  expect(toFahrenheit(5)).toBe(41);

})

//Validate functional component
it('Validate BoilingVerdict',()=>{
  const wrapper = shallow(<BoilingVerdict celsius={100} />);
  expect(wrapper.find('p').text('The water would boil.')).toBe('The water would boil.')
})


describe("Render Calculator",()=>{
  test("Two Temperature input",()=>{
    const wrapper = shallow(<App />);
    expect(wrapper.find('TemperatureInput')).toHaveLength(2);
    wrapper.find('TemperatureInput').at(0).prop('onTemperatureChange')(100)
    expect(wrapper.state('temperature')).toEqual(100)
  })
})