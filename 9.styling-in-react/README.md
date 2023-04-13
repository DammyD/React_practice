
# Styling in React
## Learning Overview
- Introduction
- Inline Styles
- CSS Stylesheet
- CSS Modules
- CSS-In-JS
- CSS Frameworks
- Popular UI Libraries
- Adding Icons to React App

### Intoduction
There are different approaches to styling in React and they are listed above. The ones that seems common today at least for project that are of scale are **CSS-IN-JS**. Any of these methods works as well but I won't advise the use of inline styles.

### Inline Styles
In React styling component using inline method is a bit different, you need to create your style as an object. We you inspect your code in the browser, the transpiler transcribes it as a normal CSS. Your inline styles does not necessarily need to be inside the tag, it can declared as a variable. The value should always be in quote (tring)

### CSS Style sheet
The styles are defined in an external style file and imported into the component file. The className is used in getting the styles

### CSS Modules
This is a different alternative to the normal CSS that we do, in that it convert all the classes inside a stylesheet into variables. The difference between external stylesheet and CSS Modules in react is the CSS Module has a .module before the extension and when import is it done as though it's a react library

### CSS-IN-JS
This is the method gainning traction. It allows us to write CSS styles directly inside JS jus likehow react aloows us to write HTML as JS with JSX. It is not **Inline styling** . This method is not a library but a concept that allow us to utilize other libraries such that we can used them inside our projects e.g Styled Components, Emotions e.t.c
