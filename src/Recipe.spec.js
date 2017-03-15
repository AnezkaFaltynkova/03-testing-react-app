import React from 'react';
import { shallow } from 'enzyme';

const Recipe = ({ title, created, ingredients, instructions }) => {
  return (
    <div>
      <div className="header">
        <h2>{title}</h2>
        <span>{created}</span>
      </div>
      <div>
        <div className="left-column">
          <ul>{ingredients.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
        </div>
        <div className="right-column">
          <ul>{instructions.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
        </div>
      </div>
    </div>
  );
};

describe('Recipe', () => {
  const recipe = {
    title: 'Tasty foo bar!',
    created: 'March 14 2017',
    ingredients: [
      '100g chocolate',
      '200g flour',
      '2 eggs'
    ],
    instructions: [
      'Put everything into a bowl and mix',
      'Bake on 200C for 20 minutes'
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

    it('should contain `right` column for instructions', () => {
      const wrapper = shallow(<Recipe {...recipe} />).find('.right-column li');
      const actual = wrapper.map(node => node.text());
      const expected = recipe.instructions;
      expect(actual).toEqual(expected);
    });
  });
});
