# Episode 03 - Laying the Foundation

#### Script :

###### Add below script in package.json to run/execute project. To build production/production app
```
 "start": "parcel index.html"
 "build": "parcel build index.html"
```

###### In terminal write below code
```
 npm run start - To start project
 npm run build - To build project
 ```

##### React.Element => ReactElement-JS Object => HTMLElement(render)

- when we render it on dom then it become html element.

### JSX (JavaScript Syntax Extension)

- It's not part of react.
- It makes react code easy to understand. JSX is different than html. It's HTML or XML like syntax.

- jsx => Transpile => browser understanding
  (transpiled before it reaches the JS) -> done by pracel -> babel

### Babel takse jsx convert it into js

- It's not created by facebook

- JSX => Babel transpile it to React.createElement => ReactElement-JS Object => HTMLElement(render) conversion is done by BABEL

##### Instructions  
- if you want to add attributes in jsx write in camelCase
- If you want to add multiple tag use "()"brackets

## React Component

#### Two types

- Class Based Component - OLD
- Functional Component - NEW

#### React Functional Component

- It nothing but normal js function which return some jSX elements or react element.

- To render component in jsx you should write in root.render<componentName />

- A component which render into another component is known as <b>Component Composition</b>.

- In component, "{ }" with help of curly braces you can write any javascript expressions. Also, you can also add react element in curly braces to render it.

- Any data present in curly braces jsx will sanitize it(make automatically free) no malicious attack will occur.



