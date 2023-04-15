# Network Events
## REST API
### What is an API?
An API is an acronym for Application program interface. a medium that affords or allow various application to interact with one another. It's like a communication pathway that allows the different applications to communicate together. Any web application you use today, you are interacting with API.

- A backend engineer builds an interface or API that a frontend engineer uses to connect to a data source.

#### There are two different methodologies used to build an API
1. RESt API
2. GraphQL

**REST** is an acronym for `REpresentational State Transfer`.
What we want to focus on today is how to fetch data from these APIs. The backend guys are the ones that implement this API for us. All we need to understand is in what format is the date coming in and how we can implement how the data is coming in.

The format a response comes in for REST API is JSON, XML or HTML. But we would be using JSON format because it is more recent and less complex than XML. JSON is the most widely used format and it is also language agnostic. An API produces a response in an object format. As a software developer, it is very important that you put into consideration user experience when building any application.

##### REACT Hooks
{useState} - This is for managing the state inside a component
{useEffect} - Is used to fetch data from the backend. It's used to perform a side effect. Any implementation to fetch data from the backend is a side effect

useEffect (() => {
// data fetching logic here
}, []);

**The useEffect takes in 2 parameters:**
1. A function
2. An array

3 states are involved in fetching data
1. The loading state
2. The data state
3. The error state

The 2 important hooks needed in making API calls
1. the useState
2. useEffect

Using the Javascript Fetch API 
Fetch(): Javascript has a fetch method that allow us make HTTP request .There are 5 HTTP request, they are used to perform some operations on API called the CURD(create, update, read, delete) operations.
GET: You get data from the last then use the fetch data from the backend
PUT
POST: To create a resource
PATCH: Are used for editing record
DELETE: used to delete records
