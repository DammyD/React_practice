# Introduction To Routing
Routing is one of the most critical aspects of web applications.

## Benefits of Routing
Routing must be implemented in a complex website with multiple pages. It increases the performance of the website by only loading small parts of the website at a time at different URLs.

Routing allows us to accomplish the following:
- Structure the web app to be easy to manage, read, and implement
- Navigate through the web application.
- Decide what should happen when the user clicks on a link

## Types of Routing
The routing mechanism can be implemented on either the client or server side. In general, all frameworks(front-end and back-end) implement routing internally and excute different functionalities based on URL changes or user requests.

**Client-side routing**
- Client-side routing takes place in the browser, where routing is handled by the JavaScript loaded for the page. All actions take place in the browser and not in the server. We can use routing libraries to implement client-side routing in modern pplications.

- Server-side routing
Here, routing happens on the server’s side. When a client clicks on a link, the following steps take place:

- The browser sends a request to the server.
- The server responds with a new HTML document and refreshes the whole page to render this new document.
- The URL changes.


## What is React Router?
The react-router is a routing library for React. Official documentation describes it as a fully-featured client-side and server-side routing library for React, a JavaScript library for building user interfaces.

We can use react-router on the web, Node.js, and React Native. It has several advantages:
- The react-router is mainly used to make single-page application (SPA). It maintains the behavior and structure of the web application
- It allows us to use different browser functionalities such as a refresh, back button, and locate objects
- It's easy to use and reduces the amount of code we have to write
- It allows for navigation without refreshing the page. Because of this, we can maintain different states in our application
- It provides many features like navigation, URL params, and passing props to components.

## BrowserRouter
Naturally, in order to do it's thing, React Router needs to be both aware and in control of your app's location. The way it does this is with its BrowserRouter component.

Under the hood, BrowserRouter uses both the history library as well as React Context. The history library helps React Router keep track of the browsing history of the application using the browser's built-in history stack, and React Context helps make history available wherever React Router needs it.

There's not much to BrowserRouter, you just need to make sure that if you're using React Router on the web, you wrap your app inside of the BrowserRouter component.

## Route
Route allows you to map your app's location to different React components. For example, say we wanted to render a Dashboard component whenever a user navigated to the /dashboard path. To do so, we'd render a Route that looked like this. Also, you can render as many  Routes as you like.

## Nested Routes
Nested Routes allow the parent Route to act as a wrapper and control the rendering of a child Route.

A real-life eaxmple of this UI could look similar to Twitter's /messages route. When you go to /messages, you see all of your previous conversations on the left side of the screen. Then, when you go to /messages/:id, you still see all your messages, but you also see your chat history for :id.
*:id* is called dynamic routing
**Outlet**: Re-renders the component that are within a parent. It serves as a placholder for other route inside Routes
**Link**: Allows us to navigate to a route
**NavLink**: Is useful when you need to navigate to a page and also want to show the content of that page.

## What is the difference between React Router and React Router DOM?
React Router is the core package for the router. React Router DOM contains DOM bindings and gives you access to React Router by default.

Note: however, that React Router DOM is only available on the browser, so you can only use it for web applications.


