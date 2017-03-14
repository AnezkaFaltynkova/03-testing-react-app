import React from 'react';
import { shallow } from 'enzyme';

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

describe('Recipe', () => {
  describe('header', () => {
    const recipe = { title: 'Tasty foo bar!', created: 'March 14 2017' };
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
});
