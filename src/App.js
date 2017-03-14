import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="o-container o-container--large u-pillar-box--small">
        <div className="c-hero u-letter-box--super u-centered">
          <h1 className="c-heading c-heading--xlarge u-window-box--none">Culinary Component & Compositions</h1>
        </div>
        {/* Insert here the <RecipesList recipes={recipes}/> */}
        <section className="u-letter-box--super" style={{ border: '1px dashed black', marginTop: '1em' }}>
          <div className="assignment" style={{ padding: '.5em' }}>
            <h2>Assignment: Implement a basic recipe blog</h2>
            <h4 style={{ color: '#F00' }}>Notice: Focus on TDD, do pair programming (1 writes failing test, 1 implements), styling is not important</h4>
            <h4>Checkout <a href="http://airbnb.io/enzyme/docs/api/shallow.html" target="_blank">Enzyme</a> project documentation - a react testing library</h4>
            <ol>
              <li>Open <code>"./src/first.spec.js"</code> file and run <code>npm test</code> and look around</li>
              <li>Create <code>"./src/Recipe.spec.js"</code> and try to write a failing assertion about non-yet-existing <code>{'<Recipe />'}</code> component that should render "Yummy!"</li>
              <li>Make test pass by creating the <code>{'<Recipe />'}</code> stateless component inside the <code>"./src/Recipe.spec.js"</code> file</li>
              <li>Add assertion about <code>{'<Recipe {...recipe}/>'}</code> rendering a the title of an recipe like <code>{'<h3>{props.title}</h3>'}</code>tag</li>
              <li>Refactor <code>{'<Recipe {...recipe}/>'}</code> into own file <code>"./src/Recipe.js"</code></li>
              <li>Implement the functionality in <code>{'<Recipe />'}</code> so the previous assertion will pass</li>
              <li>Repeat approach prev. 2 steps for remaining "recipe" object fields (respect types!) <code>{'{ title: string, created: string, ingredients: Array<string>, instructions: Array<string>, images: Array<string>, source: string }'}</code> use "recipe" from file <code>"./data/recipe.json"</code></li>
              <li>Create .spec.js for <code>{'<RecipeList recipes={recipes} />'}</code> component - it should render all recipes from <code>"./data/recipes.json"</code></li>
              <li>Create .spec.js for <code>{'<RecipeAddForm />'}</code> component for adding new recipes - focus on the "saving" method passed in props</li>
              <li>Refactor</li>
            </ol>
            <img src="http://i.imgur.com/qhCHSrx.jpg" alt="fig1" style={{ width: '400px', height: '395px', border: '10px solid white' }} />
            <img src="http://i.imgur.com/8HrpB4L.jpg" alt="fig2" style={{ width: '400px', height: '395px', border: '10px solid white' }} />
          </div>
          {/*
              BONUS ASSIGNMENT - INCEPTION: The code in `.assignment` can be refactored into a separate <Assignment {...assignment}/> component
              Start with writing the tests - focus on accepting object (shape) with data, reducing duplicates, use of sub-components
              Add own features - e.g "mark as done", "show hint", "use markdown renderer"
          */}
        </section>
      </main>
    );
  }
}

export default App;
