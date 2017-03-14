import React from 'react';
import { shallow } from 'enzyme';

const Recipe = () => {
  return (
    <div>Holla!</div>
  );
};

describe('Recipe', () => {
  it('should render a title into h2', () => {
    const recipe = { title: 'Tasty foo bar!' };
    const wrapper = shallow(<Recipe {...recipe}/>);
    const expected = recipe.title;
    const actual = wrapper.find('h2').text();
    expect(actual).toEqual(expected);
  });
});
