import React from 'react';
import { shallow } from 'enzyme';

// Step 2 - when your test complains, that `<Recipe />` does not exist create a minimal impl
const Recipe = () => {
  return (
    <div>Holla!</div>
  );
};

// Step 1 - create the test bellow
describe('Recipe', () => {
  it('should render a title into h2', () => {
    const recipe = { title: 'Tasty foo bar!' };
    const wrapper = shallow(<Recipe {...recipe}/>);
    const expected = recipe.title;
    const actual = wrapper.find('h2').text();
    expect(actual).toEqual(expected);
  });
});
