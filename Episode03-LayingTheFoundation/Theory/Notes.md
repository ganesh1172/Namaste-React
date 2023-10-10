# Episode 03 - Laying the Foundation

### script :

- use toto run/execute project. To build production/production app

- for eg. write below script in package.json
- "start": parcel index.html
- "build": parcel build index.html

in terminal write below code

- npm run start - To start project
- npm run build - To build project

#### React.Element => ReactElement-JS Object => HTMLElement(render)

- when we render it on dom then it become html element.

### JSX (JavaScript Syntax Extension)

- It's not part of react.
- It makes react code easy to understand.
  jsx is different than html. its html like syntax.

- jsx => Transpile => browser understanding
  (transpiled before it reaches the JS) -> done by pracel -> babel

### Babel takse jsx convert it into js

- It's not created by facebook

- JSX => React.createElement => ReactElement-JS Object => HTMLElement(render) conversion is done by BABEL

#### if you want to add attributes in jsx write in camelCase

- If you want to add multiple tag use "()"brackets

## React Component

#### Two types

- Class Based Component - OLD
- Functional Component - NEW

#### React Functional Component

- It nothing but normal js function which return some jSX elements.

- To render component in jsx you should write in root.render<componentName />

- A component which render into another component is known as Component Composition.

- In component, "{ }" with help of curly braces you can write any javascript expressions. Also, you can also add react element in curly braces to render it.

- Any data present in curly braces jsx will sanitize it(make automatically free) no malicious attack will occur.
