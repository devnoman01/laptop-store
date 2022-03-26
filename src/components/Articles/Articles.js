import React from "react";
import "./Articles.css";

const Articles = () => {
  return (
    <div className="container my-5">
      <h1 className="fw-bold">Popular Articles</h1>
      <hr />
      {/* question answer no 1 */}
      <article>
        <h2>How React works?</h2>
        <p>
          React, a very popular JavaScript library created by Facebook developed
          for building functional user interfaces and using interactive
          components . React uses a declarative paradigm that makes it easier to
          design and implement application while being efficient and flexible.
          React creates a Virtual DOM in the memory which is basically a
          JavaScript Object that repreesent the browser DOM. Its very much
          faster than the browser DOM. It designs simple views for each state in
          our application. If we make any change in code, the virtual DOM will
          will compare it with the browser DOM and then update and render just
          the changed part. For this methodology, React is very fast and
          efficient. Reacts Diffing Algorithm is used to compare the Virtual Dom
          when something is changed, React goes to the actual DOM and updates
          the node that was updated in the virtual DOM.
        </p>
      </article>
      {/* question answer no 2 */}
      <article>
        <h2>Difference between Props and State?</h2>
        <p>
          Props are JavaScript Object which also known as properties. Props are
          used to pass data from one component to another componenet. Props can
          not be modified, read only and immutable. And State is also JavaScript
          Object which data is passed within the component only. States are used
          to manage the internal environment of a component means the data
          changes inside the component.State is both read and write and can be
          modified. State is local to the component it can not be passed to
          other component.
        </p>
      </article>
      {/* question answer no 3 */}
      <article>
        <h2>How useState works?</h2>
        <p>
          UseState is a Hook which allows us to have state variables in
          functional components. We pass the initial state to this function and
          it returns a variable with the current state value. When use change
          something in browser and we want to reaction with this changes that
          use useState. The useState() hook can be used to keep track of
          strings, numbers, booleans, arrays, objects etc which give us freedom
          to make complex user interfaces easily.
        </p>
      </article>
    </div>
  );
};
// exporting Article function return
export default Articles;
