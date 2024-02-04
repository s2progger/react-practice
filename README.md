# React / Express Basic Practice

## Learning Objectives

- Understand basic React concepts (functional components, props, state)
- React hooks
- React router
- Form handling in React
- Form data handling in Express

## React Hooks

### `useState`

Use state allows to control the state of a variable in a functional component. You can render the value in markup and update the value using the setter function.

### `useEffect`

Use effect is where you perform tasks such as feteching data from an API or database. It runs after the component is rendered. You can also use it to clean up after the component is unmounted. It runs twice in development mode, forcuing you to consider if clean up in necessary.

### `useMemo`

Use memo allows you to cache the value of a calculation. It is useful when you have a calculation that is expensive and you don't want to run it every time the component is rendered. You probably don't need to use this hook as often as you
think you do.

### `useCallback`

Like use memo, but caches a function instead of a value. You might use this when you have a function that is expensive to re-create, which happens when the component is re-rendered. You probably don't need to use this hook as often as you think you do. If you notice a component is slow to render, but fast when a function is removed, then you might want to use this hook.

### `useRef`

Use ref allows you to *remember* a value without triggering a re-render.

## React Router

### `react-router-dom`

React router is an external library that allows you to create a single page application. You can create routes that render different components based on the URL. You can also use it to pass data to components based on the URL.

Commonly, newer React applications are built on full stack frameworks like Next.js or Remix, which have their own routing systems.

## React Form Handling

### Controlled Components

Basic form handling without a library can be accomplished by using *controlled components*. A controlled component is a component that renders form elements and controls them by keeping the form data in the component's state.

Example:

```jsx
const [newMovie, setNewMovie] = useState({ Title: "", Rating: "" });

const handleFormChange = (e) => {
  setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
};

return (
  <form>
    <input
      type="text"
      name="Title"
      value={newMovie.Title}
      onChange={handleFormChange}
    />
    <input
      type="text"
      name="Rating"
      value={newMovie.Rating}
      onChange={handleFormChange}
    />
  </form>
);
```

In this example, the `newMovie` state object is used to control the form elements. The `handleFormChange` function is used to update the `newMovie` state object when the form elements change.

You will also need to handle form submission. This can be done by adding an `onSubmit` event handler to the form element.

```jsx
const handleFormSubmit = (e) => {
  e.preventDefault();
  // Do something with newMovie
};
```

### Express Form Handling

In Express, form data is sent to the server as a string. You can use the `body-parser` middleware, which is an external library, to parse the form data into a JavaScript object.

```javascript
router.post("/", async (req, res) => {
  const { Title, Rating } = req.body;
  // Do something with Title and Rating
});
