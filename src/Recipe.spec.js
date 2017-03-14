import React from 'react';
import { shallow } from 'enzyme';

const Recipe = ({ title, created }) => {
  return (
    <div>
      <h2>{title}</h2>
      <span>{created}</span>
    </div>
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

  it('should render the create date into a span', () => {
    const recipe = { title: 'Tasty foo bar!', created: 'March 14 2017' };
    const wrapper = shallow(<Recipe {...recipe}/>);
    const expected = recipe.created;
    const actual = wrapper.find('span').text();
    expect(actual).toEqual(actual);
  });
});
