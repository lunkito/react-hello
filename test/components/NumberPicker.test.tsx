import * as React from 'react';
import { shallow } from 'enzyme';
import NumberPicker from '../../src/components/NumberPicker';

describe('NumberPicker', () => {
  test('Debe tener un valor de 0', () => {
    const wrapper = shallow(<NumberPicker />);
    expect(wrapper.find('.result').text()).toBe('0');
  });
  test('Debe tener un valor de 1 al hacer click en +', () => {
    const wrapper = shallow(<NumberPicker />);
    wrapper.find('button.plus').simulate('click');
    expect(wrapper.find('.result').text()).toBe('1');
  });
  test('Debe tener un valor de -1 al hacer click en -', () => {
    const wrapper = shallow(<NumberPicker />);
    wrapper.find('button.minus').simulate('click');
    expect(wrapper.find('.result').text()).toBe('-1');
  });
  test('No pasar del valor minimo', () => {
    const wrapper = shallow(<NumberPicker min={-1} />);
    wrapper.find('button.minus').simulate('click');
    wrapper.find('button.minus').simulate('click');
    expect(wrapper.find('.result').text()).toBe('-1');
  });
  test('No pasar del valor maximo', () => {
    const wrapper = shallow(<NumberPicker max={1} />);
    wrapper.find('button.plus').simulate('click');
    wrapper.find('button.plus').simulate('click');
    expect(wrapper.find('.result').text()).toBe('1');
  });
});