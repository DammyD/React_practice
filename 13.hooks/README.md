# Hooks in React
## Learning Overview
- What are hooks?
- Why do you need hooks?
- Different types of hooks
- Using state and effect hooks
- Rules of hooks
- Building your own hooks

- What are Hooks?
Hooks are built-in React function introduced in React version 16.8. They allow you to use features of the React library like lifecycle methods, state and context in functional components without having to worry about rewriting it to a class. This is particularly exciting because functional components provide better code composition than classes.

Each react Hook name is prefixed with the word 'use' eg useState, useEffect. This format was chosen because Hooks let developers use the special features of the React library.

=> Function is a block of code that accept a parameter(might not in some cases) and returns a value with regards to that parameter.

### Standard built-in react Hooks
- useState: To manage states.
- useEffect: To manage side effects like API calls
- useContext: To return the current value for a context
- useReducer: A useState alternative to help with complex state management
- useCallback
- useMemo

### Rules of using React Hooks
When using React Hooks there are a few rules to adhere to:
- Only call hooks at the top level of a c omponent: You shouldn't use Hooks inside loops, conditions or nested function. Instead, always use Hooks at the top level of your React function, before ant return keyword.

- Only call hooks from React functions: Never call Hooks from regular JavaScript functions. A hook is only valid within the context of a react component
    - Call Hooks from react functional components
    - Call Hooks from custom Hooks

### The State Hook
The useState() allows you to add state to a function component. It should be clled at the top level of a React function definition to manage its state.

initialState is an optional value that can be used to set the value of currentState for the first render.
The stateSetter function is used to update the value of currentState and render our component with the next state value.

`const [currentState, stateSetter] = useState(initialState)`

### State setter callback function
When the previous state value is used to calculate the next state value, pass a function the state setter. This function accepts the previous value as an argument and returns an updated value.

### Multiple State Hooks
A component can have multiple states based on what you're trying to do. useState() may be called multiple times. This gives us the freedom to sepertae concerns, simplify our state setter logic, and organize our code in whatever way makes the most sense to us.

### Side Effects
The primary purpose of a React component is to return some JSX to be rendered. Often, it is helpful for a component to execute some code that performs side effects in addition to rendering JSX.

In class components, side effects are managed with lifecycle methods. In function components, we manange side effects with the Effect Hook. Some **side effects** include:
- Fetching data from a server
- Subscribing to a data stream
- Logging values to the console
- Interval timers
- Directly interacting with the DOM

### The Effect Hook
Tje useEffect hook performs side effects every time a component renders. useEffect accepts two arguments in the form of useEffect(callback function, dependencies). The callback argument holds the side-effect logic and it's executed everytime a render happens

For the side effect logic to make use of the useEffect or prop. That prop or state has to be passed into the dependency array and then the logic inside that callback function can then pick it up and make use of it

### Effect Cleanup Functions
A useEffect often does a clean up function to prevent memory leak. A good example of instance that causes memory leaks is set timers or set intervals. The clean up function is optionally returned by the first argument of the Effect Hook. 

If the effect does anything that needs to be claeaned up to prevent memory leaks, then the effect returns a cleanup function. The Effect Hook will call this clean up function before calling the effect again as well as when the component is being removed from the DOM

### Effect Dependency Array
The dependency array is used to tell the useEffect() method when to call the effect.

- By default, with no dependency array provided, the effect is called after every render.
- An empty dependency rray signals that the effect never needs to be re-run

- A non-empty dependency array signals that the hook runs the effect only when any of the dependency array values changes.

### Building Your Own Custom Hook
Hooks are reuseable function. It's a hook you create yourself that can be used in another hook or in another component. You create custom hooks because you're trying to extract things to know you would use often or repeat. You put them in a file and call them where they are needed When you have component logic that needs to be used by multiple components, we can extract that logic to a custom hook.

Custom Hooks start with "use".

### Note:
- You can only use hook inside a function component. 
- One of the biggest benefits of useState hook is that you can have multiple different pieces of state all broken out and it becomes much esier to manage and change.