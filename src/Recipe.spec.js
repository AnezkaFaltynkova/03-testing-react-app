import React from 'react';
import { shallow } from 'enzyme';

// Step 2 - when your test complains, that `<Recipe />` does not exist create a minimal impl
const Recipe = () => {
  return (
    <div></div>
  );
};

// Step 1 - create the test bellow
describe('Recipe', () => {
  it('should render "Holla!', () => {
    // create an enzyme wrapper
    const wrapper = shallow(<Recipe />); // see http://airbnb.io/enzyme/docs/api/shallow.html
    // get the text value
    const actual = wrapper.text(); // see http://airbnb.io/enzyme/docs/api/ShallowWrapper/text.html
    const expected = 'Holla!';
    expect(actual).toEqual(expected);
  });
});
