# Testing react applications


> *"Testing shows the presence, not the absence of bugs"* - Edsger W. Dijkstra, 1969


## Development methodologies - [wikipedia](https://en.wikipedia.org/wiki/Software_development_process)

* **Waterfall** - is sequential development approach (define, anlayze, design, develop, test, deploy, maintain).
* **Prototyping** - is about creating prototypes, i.e. incomplete versions of the software program being developed.
* **Incremental** - the primary objective of each being to reduce inherent project risk by breaking a project into smaller segments and providing more ease-of-change during the development process.
* **Spiral development** - combines some key aspect of the waterfall model and rapid prototyping methodologies, in an effort to combine advantages of top-down and bottom-up concepts.
* **Rapid application development** - key objective is for fast development and delivery of a high quality system at a relatively low investment cost.
* **Agile development (Scrum, Kanban)** - iterative development, where requirements and solutions evolve via collaboration between self-organizing cross-functional teams.
* Lightweight methodologies: 

    * **Extreme Programming (XP)** - the phases are carried out in extremely small (or "continuous") steps compared to the older, "batch" processes. 
      
      First, one writes automated tests, to provide concrete goals for development. Next is coding (by programmers working in pairs, a technique known as "pair programming"), which is complete when all the tests pass, and the programmers can't think of any more tests that are needed. Design and architecture emerge from refactoring, and come after coding. The same people who do the coding do design. (Only the last feature — merging design and code — is common to all the other agile processes.)
    
    * **Test-driven development (TDD)** -  relies on the repetition of a very short development cycle: requirements are turned into very specific test cases, then the software is improved to pass the new tests, only. This is opposed to software development that allows software to be added that is not proven to meet requirements.

* **Code and fix** - an anti-pattern, where development is not done through a deliberate strategy or methodology. It is often the result of schedule pressure on the software development team.[13] Without much of a design in the way, programmers immediately begin producing code. At some point, testing begins (often late in the development cycle), and the unavoidable bugs must then be fixed - or at least, the most important ones must be fixed - before the product can be shipped. See cowboy coding.

## Programming paradigms - [wikipedia](https://en.wikipedia.org/wiki/Programming_paradigm)

* **imperative** - allows side effects
* **functional** - disallows side effects
* **declarative** - does not state the order in which operations execute - **WHAT** not HOW
* **object oriented** - groups code together with the state the code modifies
* **procedural** - groups code into functions
* **logic** - formal logic, set of sentences in logical form, expressing facts and rules about some problem domain.
* **symbolic** - which has a particular style of syntax and grammar


## Functional programming paradigm

* purity
* side-effect-free
* declarative
* expressions (evaluating to a value) instead of statements (performing side-effects)
* referential transparency (`x = x * 10` vs `const timesTen = x => x * 10` )
* recursion

## Types of tests

* **Unit tests** - functions, classes, modules, Components, reducers - isolated
* **Functional/Integration tests** - scenario test case / complex component test, not isolated
* **End-to-end tests** - full SUT setup (real DB, real instances) - not possible in browser

![test-comparison-overview](http://i.imgur.com/AFwSuXn.png)
   Slide by Andrei Pfeiffer from Testing Layers @ngBigParty 2016 


## Types of tests - by time of creation

* before impl - TDD/BDD
* after impl
* hybrid - 50:50 or 30:70
* too late - DDD === defect driven development, cover only defects with tests (acceptable for legacy code-bases - fix must have test)

## Why is unit testing required?

* [+] prevention for regression bugs
* [+] source for understanding of dev intent/feature/user story
* [+] good documentation
* [+] [Microsoft Unit testing case study](http://collaboration.csc.ncsu.edu/laurie/Papers/Unit_testing_cameraReady.pdf) - 30 % more development time, 90 % less defects

## [Answer the 5 Questions Every Unit Test Must Answer](https://medium.com/javascript-scene/what-every-unit-test-needs-f6cd34d9836d#.reqots18y)

* What component is being tested?
* What behavior of the component is being tested (test setup / givens)?
* What are the actual results?
* What are the expected results?
* How can actual results be reproduced?

## [TDD the RITE way](https://medium.com/javascript-scene/tdd-the-rite-way-53c9b46f45e3#.qbn437p06)

* Readable
* Isolated (unit tests) OR Integrated (functional / integration tests)
* Thorough
* Explicit


## JavaScript testing - Runners, Frameworks, Libraries

* [framework] [mocha](https://mochajs.org/) - Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. 
  * battle proven, simple, extensible

* [framework] [jest](https://facebook.github.io/jest/) - Painless JavaScript Testing
  * zero config
  * inherits from [jasmine](https://jasmine.github.io/)

* [lib] [chai](http://chaijs.com/) - Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

* [lib] [Sinon.js](http://sinonjs.org/) - Standalone test spies, stubs and mocks for JavaScript. Works with any unit testing framework.


## React testing ecosystem

* In early days of React, testing heavily relied on [Facebook's Test Utilities](https://facebook.github.io/react/docs/test-utils.html) and TDD was harder
* rendering into DOM was popular, and shallow rendering was not

  ```
  renderIntoDocument(element)
  ```

* **Shallow rendering**

  ```
  createRenderer()
  shallowRenderer.render()
  shallowRenderer.getRenderOutput()
  ```

  lets you render a component "one level deep" and assert facts about what its render method returns, without worrying about the behavior of child components, which are not instantiated or rendered. This does not require a DOM.

* in 2015 Airbnb released [Enzyme](http://airbnb.io/enzyme/index.html) a library with a huge API for shallow, full and static rendering methods

  * `{ shallow }` - Shallow rendering is useful to constrain yourself to testing a component as a unit, and to ensure that your tests aren't indirectly asserting on behavior of child components.
  * `{ mount }` - Full DOM rendering is ideal for use cases where you have components that may interact with DOM APIs, or may require the full lifecycle in order to fully test the component (i.e., componentDidMount etc.)
  * `{ render }` used to render react components to static HTML and analyze the resulting HTML structure.

## [Thoughts on Testing React Apps](https://medium.com/javascript-inside/some-thoughts-on-testing-react-redux-applications-8571fbc1b78f#.buzqpv62v)

* Minimal component test to verify that the component actually renders.
* Avoid verifying tags or class names.
* Verify important callbacks or props, but keep it minimal.
* The need to test logic inside a component might signal the need for refactoring.

> Additional: Using Eslint, PropTypes and Flow will add more value than simply trying to verify any internal details.

## 50 shades of failing tests


> "You cant go for 100% TDD without previous experience or training, it I'd compare it to to a marathon without prep which results in frustration, rejection...

> Every should train & prepare, analyze his performance and improve (repeatedly)

> You don't need to write unit tests, unless the most trivial bug in your software can cause serious problems to someone or even worse...

> There's no excuse to NOT write tests like we don't have time, the the boss pushes us.

## Sources

[Testing Layers - ngBigParty by Andrei Pfeiffer](https://speakerdeck.com/andreipfeiffer/testing-layers-ngbigparty)
