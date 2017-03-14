import React from 'react';
import { shallow } from 'enzyme';

// Step 2 - when your test complains, that `<Recipe />` does not exist create a minimal impl
const Recipe = ({ title, created }) => {
  return (
    <div>
      <div className="header">
        <h2>{title}</h2>
        <span>{created}</span>
      </div>
    </div>
  );
};

// Step 1 - create the test bellow
describe('Recipe', () => {
  const recipe = {
    title: 'Tasty foo bar!',
    created: 'March 14 2017',
    ingredients: [
      '100g chocolate',
      '200g flour',
      '2 eggs'
    ]
  };

  describe('header', () => {
    const getHeader = () => shallow(<Recipe {...recipe} />).find('.header');
    it('should render a title into h2', () => {
      const expected = recipe.title;
      const actual = getHeader().find('h2').text();
      expect(actual).toEqual(expected);
    });

    it('should render the create date into a span', () => {
      const expected = recipe.created;
      const actual = getHeader().find('span').text();
      expect(actual).toEqual(expected);
    });
  });

  describe('main-section', () => {
    it('should contain `left` column with list of ingredients', () => {
      const wrapper = shallow(<Recipe {...recipe} />).find('.left-column li');
      const actual = wrapper.map(node => node.text());
      const expected = recipe.ingredients;
      expect(actual).toEqual(expected);
    });

    it('should contain `right` column for instructions');
  });
});
