This folder implements a simple react app without any compile step.

# What is React?
Is a JavaScript library used for creating easy and interactive user interfaces for web and mobile applications

Why React? 
- Reusable components
- It is easy to learn
- Improved performance
- Development of both web and mobile applications
- Dedicated tools for easy debugging
- Unidirectional data flow

 A library can be used inside a framework.
 Open-source: means you can interact or see the code base of react.. You can have access to the original code of react. 

- It's open-source, 
- component-base, 
- frontend library

 JSX is vey fundamental to any react application you are trying to build.

  #  What is JSX? 
 JSX is JavaScript XML`(Extensible Markup Language)` or `JavaScript Extention syntax` that react uses to combine HTML and JavaScript easily. It uses transpilers such as babel to translate the JSX code to the JavaScript syntax.

-  It was developed by Meta to bu used alongside React, and released shortly after React in 2013. it is meant o simplify the construction of React elements, otherwise done by calling createElement(). It offers and HTML-like (or XML-like) syntax to denote React elements in JAvaScript source code.
 
- JSX is not a part of React but a tool that helps React developer easily creat React elements using a syntax similar to html.

# Why use JSX?
- It's faster than regular JavaScript
- It performs optimation while translating the code to JavaScript
- JSX makes it easier to write ot add HTML to React
- It is type-safe, and most of the errors can be found at compilation time.
- It makes it easier to create templates

**Custom elements are also called components**
All HTML elements are available in React with the exact tags names. And not just this, but JSX elements can be used to instantiate or call components

function Greeting() {
    return (
        <h1>JSX is superb!</h1>
    );
}
<!-- calling / instantiating component -->
const element = <Greeting></Greeting>;

When instantiating a component, the name of the component **must be capitalized**. It helps to give a distinction between a custom elements and HTML elements. It's not a convention, it's a MUST!

A collection of components makes up a React application. React is a component driven architecture. JSX is the smallest unit of a component.

# The ruls of JSX
1. **Return a single element:** To return multiple elements from a component, wrap them with a single parent tag. You can make use of **fragment <></>**.
If you don't want to make use of the <div> element

2. **Close all the tags:** JSX requires tags to be explicitly closed. Self-closing tags like <mg> must become <img />, and wrapped tags like <li>My names must be written as <li>My name</li>

3. **Use camelCase for attribute:** JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects. In your own components, you'll often want to read those attributs into variables. But javaScript has limitations on variable names for example theirnames cannot have `hypen or a class`, that is why attributes are written in camelCase

# The use of Javascript in JSX with curly braces
JSX lets you write HTML-like inside a JavaScript file, keeping rendering logic and content in the same place. Sometimes, you want to add a little JavaScript logic or reference a dynamic props inside that markup. In this situation, you can use `curly braces` in your JSX to `open a window` to JavaScript.

# Where to use curly braces
- As text directly inside a tag
- As attributes immediately following the `=` sign

# Component
- The buildling block of any React element. 
- It makes the task of building UIs much easier. 
- It's a reusable piece of the UI.
The technical definition of component in React: A component in React is a function, or a class with a render method(),that returns a React node.

# Ways to write component
- Function type/way
- Class type/way

The reason why function component was introduced was because back in the day, React components used to be denoted as class(ES6-style) after the advent of React 16.8, this changed. A new way to create React was introduced and that was via `function`. Function component return JSX. Functions can not handle state, only props.
Class based component also return JSX but can do more than that, they have a method called state and props.
A state is a concept

# Significance of component Architecture
- Stabilty of global state
- Ease of expansion

`import React from 'react'` is not necessarily needed for function-based component but in a class-based component, it is needed.

# Props
With props a component can be more dynamic such that whatever is pass into that component is being rendered in that component. The values are be used inside the component definition itself. It is used to pass data from one component to another.

Anything is props is read only, it's cannot be modified directly and can only be made used of the the component id is being called. Props - properties